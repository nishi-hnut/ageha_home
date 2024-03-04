import Image from "next/image"

export default function Home() {
  return (
    <main className="bg-gray-100">
      <header className="w-full sticky top-0 z-50 bg-white">
        <div className="max-w-5xl mx-auto text-center  justify-between px-4 py-7 flex">
          <div className="flex">
            <div className="text-4xl font-bold">AGEHA</div>
            <div className="text-start">
              <div className="text-xs pt-1">アゲハライブの求人情報</div>
              <div className="text-xs">
                業界人気 No.1 ✨ 高報酬のAGEHAで今すぐ稼ごう 💰
              </div>
            </div>
          </div>
          {/* ここにお仕事ログインページLinkを追加 */}
          <div>
            <button className="border px-4 py-3 text-white bg-pink-400 rounded-3xl hover:bg-pink-500">
              お仕事ページへログイン
            </button>
          </div>
        </div>
      </header>

      <div className="max-w-5xl  mx-auto">
        <div className="img">
          <img
            src="https://as2.ftcdn.net/v2/jpg/06/66/39/51/1000_F_666395131_xcH5fxuuGTrC5kQxuYDgbFBrQDeNBCWJ.jpg"
            alt=""
            className="w-full h-auto"
          />
          <div className="absolute top-1/4 left-2/4">
            <div className="text-5xl font-bold ">隙間じかんに</div>
            <div className="text-5xl font-bold mt-10">仕事する！</div>
            <div className="text-5xl font-bold mt-10">
              <span className="">時給</span>４５００円以上
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto">
        <div className="text-center">
          <div className="text-black text-4xl font-bold pt-2 px-4 border-b-red-200">
            チャットレディーのお仕事内容
          </div>
        </div>
        <div className="text-black text-xl font-bold mt-16">
          ライブチャットとは
        </div>
        <div>
          <p className="mt-5">
            ライブチャットで働く女性のことをチャットレディと呼びます。
          </p>
          <p className="mt-2">
            ライブチャットとは男性が女性とコミュニケーションを取るために利用する、主に分課金サービスです。
          </p>
          <p className="text-red-400">
            24時間365日、貴女の好きな時間・タイミングでお仕事をすることが出来ます。
          </p>
          <p className="mt-2">
            お仕事から帰ってきて夜に副業として稼いだり、見たいテレビが始まるまでや家事の合間など隙間時間にお小遣い稼ぎをしたりするのにピッタリです！
          </p>
          <p className="mt-2">
            女性はWEBカメラを利用しビデオ通話のような感じでお客さんと話します
          </p>
          <p className="mt-3">※顔出しするかどうかはご自身での判断となります</p>
        </div>

        <div className="text-black text-xl font-bold mt-16">報酬について</div>
        <div>
          <p className="mt-5">
            チャットレディーになる上で気になることの一つは報酬です。
          </p>
          <p className="mt-2">
            報酬はユーザーが消費した金額の◯％～となります。
          </p>
          <p className="mt-2">
            報酬につきましては、十分理解してから登録をしましょう。
          </p>
        </div>
      </div>

      {/* メリット */}
      <div className="bg-blue-100 pb-10 ">
        <div className="text-center mt-16">
          <div className="text-black text-4xl font-bold pt-2 px-4 border-b-red-200">
            チャットレディーのメリット
          </div>
        </div>

        <div className="max-w-5xl m-auto">
          <div className="text-black text-xl font-bold mt-16">在宅で稼げる</div>
          <div>
            <p className="mt-5">
              チャットレディは、隙間時間や在宅でも稼げるのが魅力です。
            </p>
            <p className="mt-2">
              男性会員と直接会う事がないので「安心・安全な高収入バイト」としてチャットレディ（チャトレ）を始める女性が増えています。
            </p>
          </div>
          <div className="text-black text-xl font-bold mt-16">
            スマホ一台で始められる
          </div>
          <div>
            <p className="mt-5">
              チャットレディは、スマホやパソコンで手軽に始められる仕事です。
            </p>
            <p className="">
              近年ではスマホの普及率も上がっているので、どの世代も始めやすい仕事として注目されています。
            </p>
            <p className="mt-2">
              ただし、ビデオ通話や音声通話でやり取りを行う場合は、通信環境が整っていないと、通話が途切れる恐れがあります。完全在宅でチャットレディをしたい方は、通信環境も整えておきましょう。
            </p>
          </div>
          <div className="text-black text-xl font-bold mt-16">
            相手と一切会わなくて良い
          </div>
          <div>
            <p className="mt-5">
              チャットレディは、やり取りしている相手と一切会わずに稼げます。近年では男性と直接会って食事を奢ってもらったり、報酬をもらったりするパパ活が流行っていますが、直接会うと犯罪被害などのトラブルに遭ってしまう恐れがあります。チャットレディはそのような心配がないので、安全性を重視する女性におすすめする仕事です。
            </p>
            <p className="mt-2">
              しかし、チャットレディを利用する男性客の中には、直接会おうと言ったりする方がいます。そのような男性客に対しては、丁寧にお断りしましょう。
            </p>
          </div>
        </div>
      </div>

      <div className="bg-green-50 mb-40">
        <div className="text-center pt-5">
          <div className="text-black text-4xl font-bold pt-2 px-4 border-b-red-200">
            よくある質問
          </div>
        </div>
        {/* Q＆A */}
        <div className="max-w-5xl m-auto pt-10">
          <div className="border p-10 bg-white rounded-xl shadow-2xl">
            <div className="text-xl border-b">
              <span className="text-pink-400 text-2xl mr-5">Q</span>
              登録するのにお金かかるの？
            </div>

            <div className="mt-5 text-opacity-5">
              <span className="text-blue-300 text-2xl mr-5">A</span>
              登録するのに費用は一切かかりません。完全に無料で登録していただけます。
              また退会したい場合も無料で行っていただけます。
              登録や退会に金銭は一切かかりませんので、始めてみたいなと思っている方はぜひお気軽に登録してお試しいただければと思います♪
            </div>
          </div>
        </div>
        <div className="max-w-5xl m-auto pt-10">
          <div className="border p-10 bg-white rounded-xl shadow-2xl">
            <div className="text-xl border-b">
              <span className="text-pink-400 text-2xl mr-5">Q</span>
              初めてなので不安です・・・
            </div>

            <div className="mt-5 text-opacity-5">
              <span className="text-blue-300 text-2xl mr-5">A</span>
              初めてのお仕事だと、不安や心配はつきものですよね・・・。
              <br />
              AGEHAライブチャットではそんな不安や心配を解消して頂くため様々な取り組みをしています！
              不安なこと、分からないことがあったらスタッフにお気軽にご相談ください！
              お仕事を始めた後ももちろんスタッフが丁寧にサポートさせて頂きます。お問い合わせに対応させて頂くのはもちろん、時には貴女のチャット画面にスタッフが出向いて直接やりとりをしながらアドバイスやサポートをさせて頂きます。
            </div>
          </div>
        </div>
        <div className="max-w-5xl m-auto pt-10">
          <div className="border p-10 bg-white rounded-xl shadow-2xl">
            <div className="text-xl border-b">
              <span className="text-pink-400 text-2xl mr-5">Q</span>
              初めてなので不安です・・・
            </div>

            <div className="mt-5 text-opacity-5">
              <span className="text-blue-300 text-2xl mr-5">A</span>
              初めてのお仕事だと、不安や心配はつきものですよね・・・。
              <br />
              AGEHAライブチャットではそんな不安や心配を解消して頂くため様々な取り組みをしています！
              不安なこと、分からないことがあったらスタッフにお気軽にご相談ください！
              お仕事を始めた後ももちろんスタッフが丁寧にサポートさせて頂きます。お問い合わせに対応させて頂くのはもちろん、時には貴女のチャット画面にスタッフが出向いて直接やりとりをしながらアドバイスやサポートをさせて頂きます。
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
