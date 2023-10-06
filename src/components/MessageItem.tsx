type Props = {
  message?: MessageRes;
}

export default function MessageItem({ message }: Props) {

  return (
    <div className="w-full flex flex-col gap-3 p-7 backdrop-blur-sm bg-white/70 rounded-lg">
      <div className="flex gap-4 items-center">
        <div className="avatar placeholder">
          <div className="bg-neutral-focus text-neutral-content rounded-full w-8">
            <span className="text-xs">♥</span>
          </div>
        </div>
        <div>
          {message?.name}
        </div>
      </div>
      <div className="text-sm font-thin">
        {message?.message}
      </div>
    </div>
  );
}