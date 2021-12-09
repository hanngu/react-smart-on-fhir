import { useEffect } from "react";
import { authorize } from "./api/authorize";

const Launch: React.FC = () => {

      useEffect(() => {
        async function asyncAuthorize() {
          await authorize();
        }
        asyncAuthorize();
      }, []);
      return null;
}

export default Launch;