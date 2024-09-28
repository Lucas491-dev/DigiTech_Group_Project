const subjects = [
    { name: "Aboriginal Studies", code: "1ABG10", stage: "1" },
    { name: "Aboriginal Studies", code: "1ABG20", stage: "1" },
    { name: "Accounting", code: "1ACO10", stage: "1" },
    { name: "Accounting", code: "1ACO20", stage: "1" },
    { name: "Australian Languages - Additional Language", code: "1ADL10", stage: "1" },
    { name: "Australian Languages - Additional Language", code: "1ADL20", stage: "1" },
    { name: "Armenian (continuers)", code: "1AEC10", stage: "1" },
    { name: "Armenian (continuers)", code: "1AEC20", stage: "1" },
    { name: "Australian Languages - First Language", code: "1AFL10", stage: "1" },
    { name: "Australian Languages - First Language", code: "1AFL20", stage: "1" },
    { name: "Agriculture", code: "1AGU10", stage: "1" },
    { name: "Agriculture", code: "1AGU20", stage: "1" },
    { name: "Albanian (continuers)", code: "1ALC10", stage: "1" },
    { name: "Albanian (continuers)", code: "1ALC20", stage: "1" },
    { name: "Ancient Studies", code: "1ANT10", stage: "1" },
    { name: "Ancient Studies", code: "1ANT20", stage: "1" },
    { name: "Arabic (continuers)", code: "1ARC10", stage: "1" },
    { name: "Arabic (continuers)", code: "1ARC20", stage: "1" },
    { name: "Australian Languages - Revival Language", code: "1ARL10", stage: "1" },
    { name: "Australian Languages - Revival Language", code: "1ARL20", stage: "1" },
    { name: "Auslan (continuers)", code: "1AUC10", stage: "1" },
    { name: "Auslan (continuers)", code: "1AUC20", stage: "1" },
    { name: "Bengali (continuers)", code: "1BEC10", stage: "1" },
    { name: "Bengali (continuers)", code: "1BEC20", stage: "1" },
    { name: "Biology", code: "1BGY10", stage: "1" },
    { name: "Biology", code: "1BGY20", stage: "1" },
    { name: "Business Innovation", code: "1BNV10", stage: "1" },
    { name: "Business Innovation", code: "1BNV20", stage: "1" },
    { name: "Bosnian (continuers)", code: "1BOC10", stage: "1" },
    { name: "Bosnian (continuers)", code: "1BOC20", stage: "1" },
    { name: "Chemistry", code: "1CEM10", stage: "1" },
    { name: "Chemistry", code: "1CEM20", stage: "1" },
    { name: "Chinese (beginners)", code: "1CHB10", stage: "1" },
    { name: "Chinese (beginners)", code: "1CHB20", stage: "1" },
    { name: "Chinese (continuers)", code: "1CHC10", stage: "1" },
    { name: "Chinese (continuers)", code: "1CHC20", stage: "1" },
    { name: "Chinese (background speakers)", code: "1CHD10", stage: "1" },
    { name: "Chinese (background speakers)", code: "1CHD20", stage: "1" },
    { name: "Chin Hakha (continuers)", code: "1CKC10", stage: "1" },
    { name: "Chin Hakha (continuers)", code: "1CKC20", stage: "1" },
    { name: "Community Studies", code: "1COM10", stage: "1" },
    { name: "Community Studies", code: "1COM20", stage: "1" },
    { name: "Croatian (continuers)", code: "1CRC10", stage: "1" },
    { name: "Croatian (continuers)", code: "1CRC20", stage: "1" },
    { name: "Child Studies", code: "1CSD10", stage: "1" },
    { name: "Child Studies", code: "1CSD20", stage: "1" },
    { name: "Creative Arts", code: "1CVA10", stage: "1" },
    { name: "Creative Arts", code: "1CVA20", stage: "1" },
    { name: "Cross-disciplinary Studies", code: "1CXD10", stage: "1" },
    { name: "Cross-disciplinary Studies", code: "1CXD20", stage: "1" },
    { name: "Dance", code: "1DCE10", stage: "1" },
    { name: "Dance", code: "1DCE20", stage: "1" },
    { name: "Digital Communication Solutions", code: "1DCS10", stage: "1" },
    { name: "Digital Communication Solutions", code: "1DCS20", stage: "1" },
    { name: "Digital Technologies", code: "1DGT10", stage: "1" },
    { name: "Digital Technologies", code: "1DGT20", stage: "1" },
    { name: "Drama", code: "1DMA10", stage: "1" },
    { name: "Drama", code: "1DMA20", stage: "1" },
    { name: "Dutch (continuers)", code: "1DUC10", stage: "1" },
    { name: "Dutch (continuers)", code: "1DUC20", stage: "1" },
    { name: "English as an Additional Language", code: "1EAL10", stage: "1" },
    { name: "English as an Additional Language", code: "1EAL20", stage: "1" },
    { name: "Earth and Environmental Science", code: "1EES10", stage: "1" },
    { name: "Earth and Environmental Science", code: "1EES20", stage: "1" },
    { name: "Economics", code: "1ENO10", stage: "1" },
    { name: "Economics", code: "1ENO20", stage: "1" },
    { name: "English", code: "1ESH10", stage: "1" },
    { name: "English", code: "1ESH20", stage: "1" },
    { name: "Essential English", code: "1ETE10", stage: "1" },
    { name: "Essential English", code: "1ETE20", stage: "1" },
    { name: "Filipino (continuers)", code: "1FIC10", stage: "1" },
    { name: "Filipino (continuers)", code: "1FIC20", stage: "1" },
    { name: "Food and Hospitality", code: "1FOH10", stage: "1" },
    { name: "Food and Hospitality", code: "1FOH20", stage: "1" },
    { name: "French (beginners)", code: "1FRB10", stage: "1" },
    { name: "French (beginners)", code: "1FRB20", stage: "1" },
    { name: "French (continuers)", code: "1FRC10", stage: "1" },
    { name: "French (continuers)", code: "1FRC20", stage: "1" },
    { name: "German (beginners)", code: "1GEB10", stage: "1" },
    { name: "German (beginners)", code: "1GEB20", stage: "1" },
    { name: "German (continuers)", code: "1GEC10", stage: "1" },
    { name: "German (continuers)", code: "1GEC20", stage: "1" },
    { name: "Geography", code: "1GHY10", stage: "1" },
    { name: "Geography", code: "1GHY20", stage: "1" },
    { name: "Hebrew (continuers)", code: "1HBC10", stage: "1" },
    { name: "Hebrew (continuers)", code: "1HBC20", stage: "1" },
    { name: "Health and Wellbeing", code: "1HEW10", stage: "1" },
    { name: "Health and Wellbeing", code: "1HEW20", stage: "1" },
    { name: "Hindi (continuers)", code: "1HIC10", stage: "1" },
    { name: "Hindi (continuers)", code: "1HIC20", stage: "1" },
    { name: "Hungarian (continuers)", code: "1HUC10", stage: "1" },
    { name: "Hungarian (continuers)", code: "1HUC20", stage: "1" },
    { name: "Industry and Entrepreneurial Solutions", code: "1IES10", stage: "1" },
    { name: "Industry and Entrepreneurial Solutions", code: "1IES20", stage: "1" },
    { name: "Integrated Learning", code: "1ILN10", stage: "1" },
    { name: "Integrated Learning", code: "1ILN20", stage: "1" },
    { name: "Indonesian (beginners)", code: "1INB10", stage: "1" },
    { name: "Indonesian (beginners)", code: "1INB20", stage: "1" },
    { name: "Indonesian (continuers)", code: "1INC10", stage: "1" },
    { name: "Indonesian (continuers)", code: "1INC20", stage: "1" },
    { name: "Indonesian (background speakers)", code: "1IND10", stage: "1" },
    { name: "Indonesian (background speakers)", code: "1IND20", stage: "1" },
    { name: "Information Processing and Publishing", code: "1IPR10", stage: "1" },
    { name: "Information Processing and Publishing", code: "1IPR20", stage: "1" },
    { name: "Italian (beginners)", code: "1ITB10", stage: "1" },
    { name: "Italian (beginners)", code: "1ITB20", stage: "1" },
    { name: "Italian (continuers)", code: "1ITC10", stage: "1" },
    { name: "Italian (continuers)", code: "1ITC20", stage: "1" },
    { name: "Japanese (beginners)", code: "1JAB10", stage: "1" }
  ];
  
  $(document).ready(function() {

    $('#query').on('input', function(event) {
        event.preventDefault();
        const userInput = $('#query').val().toLowerCase(); 
        
         results = subjects.filter(item => item.name.toLowerCase().includes(userInput)).slice(0,5);

        $('#results').empty();
        
     
        if (results.length > 0) {
            results.forEach((result, index) => {
                $('#results').append(`<li data-index="${index}">${result.name}</li>`); // Append each result description as a list item
            });
        } else {
           
            $('#results').append('<li>No results found</li>'); // Display a message when no results are found
            
        }
        
        
    });

    $('#results').on('click', 'li', function() {
        let index = $(this).data('index');
        let selectedItem = results[index]
        $('#query').val(selectedItem.description);
        $('#results').empty();
    })
})