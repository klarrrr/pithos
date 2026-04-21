"use client"

import {
    ColumnDef,
    flexRender,
    getCoreRowModel,
    useReactTable,
} from "@tanstack/react-table"

export function DataTable<T>({
    columns,
    data,
    total,
    page,
    setPage,
    q,
    setQ,
    sort,
    setSort,
    order,
    setOrder,
    loading,
}: any) {

    const columnDefs: ColumnDef<T>[] = columns.map((col: any) => ({
        accessorKey: col.key,
        header: col.label,
        cell: ({ row }: any) =>
            col.render
                ? col.render(row.getValue(col.key), row.original)
                : row.getValue(col.key),
    }))

    const table = useReactTable({
        data,
        columns: columnDefs,
        getCoreRowModel: getCoreRowModel(),
    })

    const totalPages = Math.ceil(total / 10)

    const rows = table.getRowModel()?.rows ?? []
    console.log("Rows: ", rows);

    return (
        <div className="flex flex-col gap-4 h-full w-full">

            {/*  Search  */}
            <input
                value={q}
                onChange={(e) => setQ(e.target.value)}
                placeholder="Search users..."
                className="border p-2 w-full rounded-md"
            />

            {/* Table wrapper */}
            <div className="w-full border border-muted rounded-lg overflow-hidden">
                <div className="p-4">

                    <table className="min-w-full border-collapse *:*:*:border *:*:*:border-muted *:*:*:p-4 w-full">

                        <thead>
                            {table.getHeaderGroups().map((hg) => (
                                <tr key={hg.id} className="bg-foreground text-background">
                                    {hg.headers.map((header) => {
                                        const key = header.id

                                        return (
                                            <th
                                                key={header.id}
                                                onClick={() => {
                                                    const newOrder =
                                                        sort === key && order === "asc"
                                                            ? "desc"
                                                            : "asc"

                                                    setSort(key)
                                                    setOrder(newOrder)
                                                }}
                                                className="cursor-pointer"
                                            >
                                                {flexRender(
                                                    header.column.columnDef.header,
                                                    header.getContext()
                                                )}
                                            </th>
                                        )
                                    })}
                                </tr>
                            ))}
                        </thead>

                        <tbody>
                            {loading ? (
                                <tr>
                                    <td colSpan={columns.length} className="text-center py-10 text-muted-foreground">
                                        Loading...
                                    </td>
                                </tr>
                            ) : rows.length === 0 ? (
                                <tr>
                                    <td colSpan={columns.length} className="text-center py-10 text-muted-foreground">
                                        No records found.
                                    </td>
                                </tr>
                            ) : (
                                table.getRowModel().rows.map((row) => (
                                    <tr key={row.id}>
                                        {row.getVisibleCells().map((cell) => (
                                            <td key={cell.id}>
                                                {flexRender(
                                                    cell.column.columnDef.cell,
                                                    cell.getContext()
                                                )}
                                            </td>
                                        ))}
                                    </tr>
                                ))
                            )}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Pagination */}
            <div className="flex justify-between items-center">
                <button
                    disabled={page === 1}
                    onClick={() => setPage(page - 1)}
                >
                    Prev
                </button>

                <span>
                    Page {page} of {totalPages || 1}
                </span>

                <button
                    disabled={page >= totalPages}
                    onClick={() => setPage(page + 1)}
                >
                    Next
                </button>
            </div>
        </div>
    )
}