import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-transparent w-full h-[50px] text-white drop-shadow-[2px_2px_var(--tw-shadow-color)] shadow-black/20">
    {/* <footer className="text-white text-center bg-black/20"> */}
      <div className="flex flex-col justify-center items-center h-full text-[13px]">
        <p>Copyright © 2024 - All right reserved</p>
        <p>
          <Link href="https://mckimkung.dimension-studio.net" target="_blank" className="underline-animate relative">@MCKimKunG</Link>,&nbsp;
          <Link href="https://ppekkungz.in.th" target="_blank" className="underline-animate relative">@PPekKunGz</Link>,&nbsp;
          <Link href="https://github.com/Novaritia" target="_blank" className="underline-animate relative">@Novaritia</Link>,&nbsp;
          <Link href="https://dimension-studio.net" target="_blank" className="underline-animate relative">@Dimension Studio</Link>
        </p>
      </div>
    </footer>
  );
}