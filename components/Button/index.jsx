import Link from "next/link";

export default function Button({ href, text }) {
  return (
    <>
      <button className="btn-primary">
        <Link href={href}>{text}</Link>
      </button>
    </>
  );
}
