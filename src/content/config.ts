import { z,defineCollection } from "astro:content";
import { format } from "date-fns";

const postCollection = defineCollection({
    schema: () => z.object({
        author: z.string(),
        categories: z.array(z.string()),
        date: z.string().transform(str => format(new Date(str), 'MMMM d, yyyy')),
        featured: z.boolean().default(false),
        title: z.string()
    })
})

export const collection = {
    posts: postCollection
}