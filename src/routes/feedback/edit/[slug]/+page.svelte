<script>
    import {goto} from "$app/navigation";
    import {feedbacks, categories, statuses} from "@/store/store.js";
    import IconArrowHr from "@/components/vectors/IconArrowHr.svelte";
    import IconDecorationEdit from "@/components/vectors/IconDecorationEdit.svelte";
    import Select from "@/components/elements/Select.svelte";

    export let data;

    const allStatuses = $statuses.map((item) => item.name);
    let feedbackFormData = {...data};

    function setCategory(data) {
        feedbackFormData.category = data.detail;
    }
    function setStatus(data) {
        feedbackFormData.status = data.detail;
    }
    function updateFeedback() {
        let currentFeedbackIndex = $feedbacks.findIndex((item) => item.id === data.id);
        $feedbacks.splice(currentFeedbackIndex, 1, feedbackFormData)
        feedbacks.set($feedbacks);
        goto('/');
    }
</script>
<div class="feedback-form-wrapper">
    <div class="navigation">
        <a href="/" class="btn link"><IconArrowHr />Go Back</a>
    </div>
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
        <textarea id="detail" class="input" bind:value={feedbackFormData.description}></textarea>
        <div class="action">
            <button class="btn red">Delete</button>
            <span class="spacer"></span>
            <a href="/" class="btn navy">Cancel</a>
            <button class="btn primary" on:click={() => updateFeedback()}>Save Changes</button>
        </div>
    </div>
</div>

<style lang="stylus">
  @import "src/styles/feedback-form.styl"
</style>
