<script>
    import {afterNavigate, goto} from "$app/navigation";
    import {feedbacks, categories} from "@/store/store.js";
    import {findNextValidId} from "@/scripts/helper.js";
    import NavHeader from "@/components/NavHeader.svelte";
    import IconDecorationAdd from "@/components/vectors/IconDecorationAdd.svelte";
    import Select from "@/components/elements/Select.svelte";

    let feedbackFormData = {
        id: 0,
        title: '',
        category: 'Feature',
        upvotes: 0,
        status: 'Suggestion',
        description: '',
        comments: [],
    }
    let cameFrom = '/';

    $: isFormValid = feedbackFormData.title !== '' && feedbackFormData.description !== '';

    function setCategory(data) {
        feedbackFormData.category = data.detail;
    }

    function goBack() {
        goto(cameFrom);
    }
    function addFeedback() {
        feedbackFormData.id = findNextValidId($feedbacks.map((item) => item.id));
        feedbacks.update((list) => {
            list.push(feedbackFormData);
            return list;
        });
        goBack();
    }
    afterNavigate((navigation) => {
        if (navigation.from) {
            cameFrom = navigation.from.route.id;
        }
    });
</script>
<div class="feedback-form-wrapper" role="main">
    <NavHeader />
    <div class="feedback-form">
        <span class="decoration"><IconDecorationAdd /></span>
        <h1>Create New Feedback</h1>
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
        <label class="label" for="detail">Feedback Detail</label>
        <span>Include any specific comments on what should be improved, added, etc.</span>
        <textarea id="detail" class="input" rows="4" bind:value={feedbackFormData.description}></textarea>
        <div class="action">
            <a href="/" class="btn navy">Cancel</a>
            <button class="btn primary" disabled="{!isFormValid}" on:click={() => addFeedback()}>Add Feedback</button>
        </div>
    </div>
</div>

<style lang="stylus">
  @import "src/styles/feedback-form.styl"
</style>
