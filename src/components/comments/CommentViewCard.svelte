<script>
    import {replies} from "@/store/store.js";
    import MessageViewCard from "@/components/comments/MessageViewCard.svelte";
    export let comment;
    $: repliesOnThisComment = $replies.filter((item) => item.commentId === comment.id);
</script>

<MessageViewCard role="comment" message="{comment}" replies="{repliesOnThisComment}" />
{#each repliesOnThisComment as reply, r}
    <MessageViewCard role="reply" message="{reply}" isLastItem="{repliesOnThisComment.length === r + 1}"/>
{/each}
