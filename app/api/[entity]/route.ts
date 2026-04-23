// app/api/[entity]/route.ts

import { createAdminClient } from "@/lib/supabase/admin"
import { NextRequest } from "next/server"
import { NextResponse } from "next/server"

export async function GET(
    req: NextRequest,
    context: { params: Promise<{ entity: string }> }
) {
    const { entity } = await context.params
    const supabase = createAdminClient()
    const { searchParams } = new URL(req.url)

    const page = Number(searchParams.get("page") ?? 1)
    const q = searchParams.get("q") ?? ""
    const sort = searchParams.get("sort") ?? "id"
    const order = searchParams.get("order") ?? "asc"

    const limit = 9
    const from = (page - 1) * limit
    const to = from + limit - 1

    let query = supabase
        .from(entity)
        .select("*", { count: "exact" })

    // Search across fields
    if (q) {
        
        // console.log("ConsoleLog q: ", q)
        // Text-Based columns only for flexibility
        // query = query.or(`user_email.ilike.%${q}%, user_fullname.ilike.%${q}%, id::text.ilike.%${q}%`)
        query = query.or(`user_email.ilike.%${q}%, user_fullname.ilike.%${q}%`)
        // TODO: Find some kind of way to query different column types.
        // query = query.or(`user_email.plfts.${q},user_fullname.plfts.${q}`)
        
        // query = query.ilike("user_fullname", `%${q}%`)
    }

    query = query.order(sort, { ascending: order === "asc" })

    const { data, count, error } = await query.range(from, to)

    // Log Supabase errors
    if (error) {
        console.error("Supabase query error:", {
            entity: entity,
            error,
            query: { page, q, sort, order, from, to }
        })
    }

    return NextResponse.json(
        {
            data,
            total: count,
            error: error ? error.message : null, 
        },
        {
            status: error ? 500 : 200,
        }
    )
}

/* 

- Let's say I write a loop like a for loop
- And I loop over an array of columns such as ['id', 'user_email', 'user_fullname']

for (array : e) {
    query = query.ilike(e, `%${q}%`)
}

- Can i stack on my ilikes on the query then await for it later on?
- is this a viable solution?


=====


- What about if i switch the query.ilike with:

query = query.or(`${e}.ilike.%${q}%`)

- This way, i won't have to worry about the ilike being AND clauses right?

*/