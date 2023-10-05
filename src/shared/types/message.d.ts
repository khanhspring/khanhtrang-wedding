interface MessageRes {
  message?: string;
  name?: string;
  createdAt?: Date;
}

interface AddMessageReq {
  message?: string;
  name?: string;
  invitee?: string;
}