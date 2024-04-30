import Login from "@/components/Login";
import { usuarios } from "@/lib/data";


export default function Home() {
  return (
    <main>
      {usuarios[1].logado || usuarios[1].logado ? <h1>Seja bem, vindo!</h1> : <Login />}    
    </main>
  );
}
