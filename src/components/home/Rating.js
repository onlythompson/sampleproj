

const Rating = () => {
    return(
        <div class="rating" style="width: 20rem">
	<input id="rating-5" type="radio" name="rating" value="5"/><label for="rating-5"><i class="fas fa-3x fa-star"></i></label>
	<input id="rating-4" type="radio" name="rating" value="4" checked /><label for="rating-4"><i class="fas fa-3x fa-star"></i></label>
	<input id="rating-3" type="radio" name="rating" value="3"/><label for="rating-3"><i class="fas fa-3x fa-star"></i></label>
	<input id="rating-2" type="radio" name="rating" value="2"/><label for="rating-2"><i class="fas fa-3x fa-star"></i></label>
	<input id="rating-1" type="radio" name="rating" value="1"/><label for="rating-1"><i class="fas fa-3x fa-star"></i></label>
</div>
    )
}

export default Rating