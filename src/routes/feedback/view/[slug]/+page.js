import {error} from "@sveltejs/kit";
import {get} from "svelte/store";
import {feedbacks} from "@/store/store.js";
import {comments} from "@/store/store.js";
export const load = ({ params }) => {
    const id = !isNaN(Number(params.slug));
    const feedback = id ? get(feedbacks).find(item => item.id === Number(params.slug)) : undefined;
    if (feedback) {
        feedback.comments = get(comments).filter(item => item.feedbackId === feedback.id);
        return feedback
    }
    throw error(404, 'Not found');
};
