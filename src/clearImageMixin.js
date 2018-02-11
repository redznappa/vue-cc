export const clearImageMixin = {
    methods: {
        clearImage: function () {
            if(this.imageName != '') {
                this.imageName = 'logo-green-2x.png'
            }                
        }
    }
}