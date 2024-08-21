import Image from "next/image";
import Link from "next/link";
import React from "react";

const HomePage: React.FC = () => {
  return (
    <div className="text-center mt-10">
      <h1 className="flex justify-center align-middle gap-3 text-3xl font-bold">
        Test app for{" "}
        <Link href={"https://systeme.io/ru"} target="_blanc">
          <Image
          className="flex"
            width={150}
            height={100}
            alt="Systeme.io_logo"
            src={
              "https://d1yei2z3i6k35z.cloudfront.net/161/6093bf5960c6b_image10.png"
            }
          />
        </Link>
      </h1>
      <p className="mt-4 text-lg">
        This is the home page. Use the navigation bar to explore other pages.
      </p>
    </div>
  );
};

export default HomePage;
