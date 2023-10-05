import { useForm } from "react-hook-form";
import apis from '../shared/apis/index';
import toast from "react-hot-toast";
import { useMessages } from "@/shared/hooks/message";
import { useState } from "react";

type FormValues = {
  name?: string
  message?: string
}

type Props = {
  invitee?: string;
}

export default function MessageForm({invitee}: Props) {
  const { mutate } = useMessages('AuxEN8nLjFed');
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormValues>();

  const onSubmit = handleSubmit(async (data) => {
    setLoading(true);
    const res = await apis.message.addMessage('AuxEN8nLjFed', [{
      name: data.name,
      message: data.message,
      invitee: invitee,
    }]);

    reset();
    mutate();
    toast.success('Gửi lời chúc thành công. Xin cảm ơn!');
    setLoading(false);
  })

  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-5">
      <input {...register("name", { required: true })} type="text" placeholder="Tên bạn..." className={`input input-bordered w-full ${errors.name ? 'input-error' : ''}`} />
      <textarea {...register("message", { required: true })} className={`textarea textarea-bordered resize-none ${errors.message ? 'textarea-error' : ''}`} placeholder="Lời chúc..." rows={3}></textarea>
      <div>
        <button className="btn btn-outline" disabled={loading}>
          Gửi lời chúc
          {loading && <span className="loading loading-ring"></span>}
        </button>
      </div>
    </form>
  );
}