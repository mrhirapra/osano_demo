import Image from "next/image";
import Script from "next/script";

export default function Home() {
  return (
    <div className="h-screen flex items-center justify-center">
        <p className="font-serif text-3xl capitalize">osano demo</p>
        <Script src="https://cmp.osano.com/Azz8BxUZW6uC96GYa/2f59f869-5484-4eb4-9ada-6f79da286f9e/osano.js"></Script>
    </div>
  );
}
