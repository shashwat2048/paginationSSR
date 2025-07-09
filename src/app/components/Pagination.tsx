import Link from "next/link";

type Props = {
  currentPage: number;
  totalPages: number;
};

function getPageNumbers(current: number, total: number): (number | "...")[] {
  const delta = 2;
  const pages: (number | "...")[] = [];

  const left = Math.max(2, current - delta);
  const right = Math.min(total - 1, current + delta);

  pages.push(1); // always show first page

  if (left > 2) {
    pages.push("...");
  }

  for (let i = left; i <= right; i++) {
    pages.push(i);
  }

  if (right < total - 1) {
    pages.push("...");
  }

  if (total > 1) {
    pages.push(total); // always show last page if more than 1
  }

  return pages;
}

export default function Pagination({ currentPage, totalPages }: Props) {
  const pageNumbers = getPageNumbers(currentPage, totalPages);

  return (
    <div className="flex gap-2 justify-center mt-4 flex-wrap">
      <Link
        href={`/?page=${currentPage - 1}`}
        className="px-3 py-1 border rounded disabled:opacity-50"
        aria-disabled={currentPage === 1}
        tabIndex={currentPage === 1 ? -1 : 0}
        style={{ pointerEvents: currentPage === 1 ? "none" : undefined, opacity: currentPage === 1 ? 0.5 : 1 }}
      >
        Prev
      </Link>

      {pageNumbers.map((page, index) =>
        page === "..." ? (
          <span key={`dots-${index}`} className="px-3 py-1 select-none">
            ...
          </span>
        ) : (
          <Link
            key={`page-${page}`}
            href={`/?page=${page}`}
            className={`px-3 py-1 border rounded ${page === currentPage ? "bg-black text-white" : ""} cursor-pointer`}
            aria-current={page === currentPage ? "page" : undefined}
            style={{ pointerEvents: page === currentPage ? "none" : undefined, opacity: page === currentPage ? 0.7 : 1 }}
          >
            {page}
          </Link>
        )
      )}

      <Link
        href={`/?page=${currentPage + 1}`}
        className="px-3 py-1 border rounded disabled:opacity-50"
        aria-disabled={currentPage === totalPages}
        tabIndex={currentPage === totalPages ? -1 : 0}
        style={{ pointerEvents: currentPage === totalPages ? "none" : undefined, opacity: currentPage === totalPages ? 0.5 : 1 }}
      >
        Next
      </Link>
    </div>
  );
}