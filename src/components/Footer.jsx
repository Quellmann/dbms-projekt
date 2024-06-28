export default function Footer() {
  return (
    <footer className="mx-auto mt-5 flex max-w-7xl p-2 lg:px-8 text-sm text-gray-900 dark:text-slate-400">
      <p>
        &copy; {new Date().getFullYear()} Goethe Uni Learning Platform by
        Sebastian Gleixner
      </p>
    </footer>
  );
}
