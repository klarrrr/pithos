import { createAdminClient } from "@/lib/supabase/admin";
import { NextResponse } from "next/server";

export async function POST(req : Request) {
    const { column_name, table_name } = await req.json();

    // console.log("Column Name: ", column_name)

    const supabase = createAdminClient();

    const { data, error } = await supabase.rpc("get_distinct_values", {
        col : column_name,
        tbl : table_name
    });

    if (error) {
        return NextResponse.json({ error }, { status: 500 });
    }

    return NextResponse.json({ data });
}