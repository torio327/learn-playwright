import {Metadata} from "next";

export const metadata:Metadata={
  title:"first page",
  description:"playwrightの最初のステップ"
}

export default function Home() {
  return (
  <>
  <main>
    <h1>Playwrightのハンズオン</h1>
    <p>あなたはテストのエキスパート</p>
    <p>
      <button>操作ボタン</button>
    </p>
  </main>
  </>
  );
}
