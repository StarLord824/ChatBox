import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../../config/firebase-config";
import Cookies from "universal-cookie";

const Auth = ({
  setAuthStatus,
}: {
  setAuthStatus: (status: boolean) => void;
}) => {
  const cookie = new Cookies();
  const signInWithGoogle = async () => {
    try {
      const res = await signInWithPopup(auth, provider);
      setAuthStatus(true);
      console.log(res);
      cookie.set("authStatusCookie", res.user.refreshToken);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div className="flex justify-center mt-10">
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={signInWithGoogle}
      >
        Sign in with Google
      </button>
    </div>
  );
};

export default Auth;
