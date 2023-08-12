import {redirect} from "@sveltejs/kit";
import type {PageLoad} from "./$types";

export const load: PageLoad = async ({parent}) => {

    const {session, supabase} = await parent();

    if (!session)
        throw redirect(302, '/login')

    return {
        session
    }
}