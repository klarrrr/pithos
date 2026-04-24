import { useEffect, useState } from "react"

export function useDataTable(entity: string, searchableColumns: string[] = []) {
    const [data, setData] = useState([])
    const [total, setTotal] = useState(0)
    const [page, setPage] = useState(1)
    const [q, setQ] = useState("")
    const [debouncedQ, setDebouncedQ] = useState("");
    const [sort, setSort] = useState("id")
    const [order, setOrder] = useState<"asc" | "desc">("asc")
    const [filter, setFilter] = useState<Record<string, string>>({});

    useEffect(() => {
        const fetchData = async () => {
            
            try {
                
                // Search Params
                const params = new URLSearchParams({
                    page: String(page),
                    q: debouncedQ,
                    sort,
                    order,
                })

                // Append each searchable columns
                searchableColumns.forEach(col => {
                    params.append("search", col);
                });

                // Append each filter string
                Object.entries(filter).forEach(([column, value]) => {
                    if (value) {
                        params.append(`filter[${column}]`, value);
                    }
                });

                const apiLink = `/api/${entity}?${params}`;
                console.log("Fetch Api Link: ", apiLink);
                const res = await fetch(apiLink, {
                    method: "GET"
                })
                
                const json = await res.json()

                // if (json && q) setPage(1) 

                setData(json.data)
                setTotal(json.total)
            } catch (error) {
                console.log("API-[entity] error: ", error);
            }
            
        }

        fetchData()
    }, [entity, page, debouncedQ, sort, order, filter])

    useEffect(() => {
        setPage(1);
    }, [filter]);

    return {
        entity,
        data,
        total,
        page,
        setPage,
        q,
        setQ,
        debouncedQ,
        setDebouncedQ,
        sort,
        setSort,
        order,
        setOrder,
        filter,
        setFilter
    }
}