import Link from "next/link";

const About = () => (
  <div id="about" className="about flex flex-col justify p-8 m-8">
    <h3 className="text-3xl font-semibold mb-4 with-green-underline">About</h3>

    <p className="text-lg text-justify items-center justify-normal">
      Lorem ipsum dolor sit amet. Et dolores assumenda et amet animi in pariatur
      dolor qui quia doloremque ea minima error et quidem modi sed sint quia. Et
      sint recusandae rem dignissimos distinctio vel aliquam corporis. Ut illum
      excepturi et labore internos et dolor accusantium ut perspiciatis odit At
      voluptas mollitia? Qui perferendis modi et consequatur dolor eos provident
      quia non sapiente delectus quo fuga mollitia est alias aspernatur ad
      tenetur provident! Quo veritatis molestiae est impedit nesciunt ea dolor
      quasi non explicabo voluptatem At accusamus sunt. Sit autem provident aut
      dignissimos cumque est saepe consectetur qui atque autem ea magnam
      consequatur quo iure ipsum ut laudantium consectetur.{" "}
      <Link href={"/about"} className="text-blue-600">
        Read More...
      </Link>
    </p>
  </div>
);

export default About;
