"use client";
// NOTE: (auth)はRoute Groups（ルートグループ）と呼ばれる機能
// URLに影響を与えずにルートを整理するためのフォルダ
// 例: (auth)/sign-in は /sign-in というURLになる（/auth/sign-inではない）
// 同じグループ内でlayout.tsxを共有して、認証ページ専用のレイアウトを適用可能

import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface AuthLayoutProps {
  children: React.ReactNode;
}

const AuthLayout = ({ children }: AuthLayoutProps) => {
  const pathname = usePathname();
  const isSignIn = pathname === "/sign-in";
  return (
    <main className="bg-neutral-100 min-h-screen">
      <div className="mx-auto max-w-screen-2xl p-4">
        <nav className="flex justify-between items-center">
          <Image src="/logo.svg" height={56} width={152} alt="logo" />
          <div className="flex items-center gap-2">
            <Button variant="secondary">
              <Link href={isSignIn ? "/sign-up" : "/sign-in"}>
                {isSignIn ? "Sign Up" : "Login"}
              </Link>
            </Button>
          </div>
        </nav>
        <div className="flex flex-col items-center justify-center pt-4 md:pt-14">
          {children}
        </div>
      </div>
    </main>
  );
};

export default AuthLayout;
