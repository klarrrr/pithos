import { useEffect, useState } from "react"

export function useDataTable(entity: string) {
    const [data, setData] = useState([])
    const [total, setTotal] = useState(0)

    const [page, setPage] = useState(1)
    const [q, setQ] = useState("")
    const [sort, setSort] = useState("id")
    const [order, setOrder] = useState<"asc" | "desc">("asc")

    useEffect(() => {
        const fetchData = async () => {
            
            try {
                const params = new URLSearchParams({
                    page: String(page),
                    q,
                    sort,
                    order,
                })

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
    }, [entity, page, q, sort, order])

    return {
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
    }
}