<script>
    import {replies} from "@/store/store.js";
    import MessageCard from "@/components/comments/MessageCard.svelte";
    export let comment = {};
    $: repliesOnThisComment = $replies.filter((item) => item.commentId === comment.id);
</script>

<MessageCard role="comment" message="{comment}" replies="{repliesOnThisComment}" />
{#each repliesOnThisComment as reply, r}
    <MessageCard role="reply" message="{reply}" isLastItem="{repliesOnThisComment.length === r + 1}"/>
{/each}
