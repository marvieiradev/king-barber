import { Button } from "./ui/button";
import { DialogDescription, DialogTitle } from "./ui/dialog";
import Image from "next/image";
import { signIn } from "next-auth/react";

const SignDialog = () => {
  const handleLoginWithGoogleClick = () => signIn("google");
  return (
    <>
      <DialogTitle>Faça login na plataforma</DialogTitle>
      <DialogDescription>
        Conecte-se usando sua conta do Google.
      </DialogDescription>
      <Button
        variant="outline"
        className="gap-1 font-bold"
        onClick={handleLoginWithGoogleClick}
      >
        <Image alt="google" src="/google.svg" width={18} height={18} />
        Google
      </Button>
    </>
  );
};

export default SignDialog;
