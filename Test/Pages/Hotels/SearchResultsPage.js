class SearchResultsPage{

    goingToLoacator='//button[@data-stid="destination_form_field-menu-trigger"]'

    async getGoingToText(){
        return await $(this.goingToLoacator).getText()
    }

}

module.exports= SearchResultsPage