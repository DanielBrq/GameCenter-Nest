import { User } from "src/modules/User/interfaces/user.interface";
import { Credential } from "./credential.interface";

export interface Auth extends User {
  //fk credential (password)
  credential?: Credential | null;
}
