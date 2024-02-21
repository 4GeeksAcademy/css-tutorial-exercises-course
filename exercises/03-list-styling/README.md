# `03` List styling

In the front end we often have to list items and the way to do that is with `<ul>` tags, for unordered/bulleted lists, and `<ol>` tags for ordered/numbered lists.  

We have CSS control over what these lists look like, what bullets or numbers they use, etc.

For example:

```HTML
    ul {
        list-style-type: none;
        margin: 0;
        padding: 0;
    }
```

Will remove the numbers or bullets and will move the text to the left so there is no empty space where the bullets once were.

**Note:** 

Run the existing code first to see what the page originally looks like.
Then make the changes below and run again.  

## 📝 Instructions:


1. Make the Coca Cola drink numbers into lower case letters. 
2. Make the Pepsi drink numbers into square bullets.
3. Make the Healthy drink bullets into Armenian numbers. :) 
4. Completely remove the bullets and extra spacing from the Web-developer drinks. 

### 💡 Hint:

- How to work with CSS list styles: https://www.w3schools.com/css/css_list.asp
- Changing bullets into numbers and vice versa means that you would need to change the type of list - ordered or unordered. Changes in the html tags may be necessary. 
- `armenian` is an actual possible value of `list-style-type`: https://www.w3schools.com/cssref/pr_list-style-type.asp