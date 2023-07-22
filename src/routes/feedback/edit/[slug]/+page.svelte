<script>
    import {goto} from "$app/navigation";
    import {feedbacks, categories, statuses, comments, replies} from "@/store/store.js";
    import NavHeader from "@/components/NavHeader.svelte";
    import IconDecorationEdit from "@/components/vectors/IconDecorationEdit.svelte";
    import Select from "@/components/elements/Select.svelte";
    import Modal from "@/components/elements/Modal.svelte";

    export let data;

    const currentFeedbackIndex = $feedbacks.findIndex((item) => item.id === data.id);
    const allStatuses = $statuses.map((item) => item.name);
    let feedbackFormData = {...data};

    $: isFormValid = feedbackFormData.title !== '' && feedbackFormData.description !== '';

    function goBack() {
        history.back();
    }
    function setCategory(data) {
        feedbackFormData.category = data.detail;
    }
    function setStatus(data) {
        feedbackFormData.status = data.detail;
    }
    function updateFeedback() {
        $feedbacks.splice(currentFeedbackIndex, 1, feedbackFormData);
        feedbacks.set($feedbacks);
        goBack();
    }
    function deleteRepliesRelatedToThisFeedback(commentIDs) {
        replies.set($replies.filter((item) => !commentIDs.includes(item.commentId)));
    }
    function deleteCommentsMadeOnThisFeedback() {
        const commentIDs = $comments.filter((item) => item.feedbackId === data.id).map((item) => item.id);
        deleteRepliesRelatedToThisFeedback(commentIDs);
        comments.set($comments.filter((item) => item.feedbackId !== data.id));
    }
    function deleteFeedback() {
        deleteCommentsMadeOnThisFeedback();
        $feedbacks.splice(currentFeedbackIndex, 1);
        feedbacks.set($feedbacks);
        hideDeleteConfirmation();
        goto('/');
    }
    function showDeleteConfirmation() {
        const showModal = new CustomEvent('modal::show', {
            detail: 'delete-feedback-modal',
        })
        window.dispatchEvent(showModal);
    }
    function hideDeleteConfirmation() {
        const hideModal = new CustomEvent('modal::hide', {
            detail: 'delete-feedback-modal',
        })
        window.dispatchEvent(hideModal);
    }
</script>
<div class="feedback-form-wrapper" role="main">
    <NavHeader />
    <div class="feedback-form">
        <span class="decoration"><IconDecorationEdit /></span>
        <h1>Editing '{data.title}'</h1>
        <label class="label" for="title">Feedback Title</label>
        <span>Add a short, descriptive headline</span>
        <input id="title" class="input" bind:value={feedbackFormData.title}>
        <label class="label">Category</label>
        <span>Choose a category for your feedback</span>
        <Select
            mode="regular"
            label=""
            value="{feedbackFormData.category}"
            options="{$categories}"
            on:select={setCategory}/>
        <label class="label">Update Status</label>
        <span>Change feedback state</span>
        <Select
            mode="regular"
            label=""
            value="{feedbackFormData.status}"
            options="{allStatuses}"
            on:select={setStatus}/>
        <label class="label" for="detail">Feedback Detail</label>
        <span>Include any specific comments on what should be improved, added, etc.</span>
        <textarea id="detail" class="input" rows="4" bind:value={feedbackFormData.description}></textarea>
        <div class="action">
            <button class="btn red" on:click={() => showDeleteConfirmation()}>Delete</button>
            <span class="spacer"></span>
            <a href="/" class="btn navy">Cancel</a>
            <button class="btn primary" disabled="{!isFormValid}" on:click={() => updateFeedback()}>Save Changes</button>
        </div>
    </div>
</div>

<Modal
    id="delete-feedback-modal"
    variant="red"
    okText="Delete"
    on:ok={() => deleteFeedback()}
>
    <h4 slot="header">Delete Feedback?</h4>
    <p slot="body">
        Are you sure you want to delete this feedback? <br>This action will delete all the comments and
        replies made on this feedback.
    </p>
</Modal>

<style lang="stylus">
  @import "src/styles/feedback-form.styl"
</style>
