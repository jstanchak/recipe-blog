
export default function Header({blogTitle}) {
  return (
    <header className="text-white text-center py-5">
      <h1 className="font-title text-5xl font-bold">{blogTitle}</h1>
    </header>
  )
}