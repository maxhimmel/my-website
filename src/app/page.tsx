import Image from "next/image";
import { PageContainer } from "./components/pageContainer";
import { ScrollVerticalAnimation } from "./svg/patterns/animations";
import { TicTacToePattern } from "./svg/patterns/ticTacToe";

export default function AboutMe() {
  return (
    <PageContainer>
      <div className="hero items-start">
        <div className="hero-content">
          <div className="card lg:card-side bg-base-100 shadow-xl p-8">
            <div className="relative">
              <div
                className="relative mask mask-hexagon size-56
                    animate-[spin_20s_linear_infinite]"
              >
                <TicTacToePattern
                  className="bg-secondary text-primary size-full
                    animate-[spin-reverse_20s_linear_infinite]"
                  animations={[
                    <ScrollVerticalAnimation
                      key={1}
                      direction="up"
                      dur="4s"
                      repeatCount="indefinite"
                    />,
                  ]}
                />
              </div>
              <div className="absolute top-6 left-6 rounded-full size-44 border-4 border-primary">
                <Image
                  src="/profile-pic.jpg"
                  alt="Profile Picture"
                  fill
                  className="rounded-full"
                />
              </div>
            </div>
            <div className="card-body">
              <h2 className="card-title">Welcome!</h2>

              <p>
                By some twist of fate, goodwill, or good luck you’ve stumbled
                upon my portfolio! Here you can view my resumé and the games
                I've published professionally. I’m currently looking for new
                opportunities in game programming and web dev, so feel free to
                reach out if you think I might be a good fit for your team. I'm
                excited to hear from you!
                <br />
                <br />
                <i>
                  I also want to add that I had a lot of fun building this site
                  with Next.js, DaisyUI, Tailwind, and Hero Patterns. I hope you
                  like it!
                </i>
              </p>
              {/* <div className="card-actions justify-end">
                <NavMenu className="xl:menu-horizontal" />
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </PageContainer>
  );
}
