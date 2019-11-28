# eBay Front End Developer Test

For this test we would like you to create a small React Application. The purpose of this application is to parse the attached ‘data.js’ file and render this on the page as HTML. The data is an object and within that object is a ‘blocks’ array of objects. Each object in this ‘blocks’ array has a ‘type’ parameter. For example, the first object:

```
{
  type: 'header',
  data: {
    text: '20% off eligible items',
  },
},
```

This has a type ‘header’ and a data object. This means this object should be rendered on the page as an h1 element and the text in this data object should be in this header. The second object:

```
{
 type: 'header',
 data: {
   text: 'Terms &amp; conditions',
   level: 2,
 },
},
```

This is also of type ‘header’ but in the data object it has ‘level’: 2. So this would render as an h2 element.

Therefore, for this test we would require there be some sort of trigger (button for example) on initial load that when pressed would parse this object and render it out onto the page. The finished page when rendered should look something like this: [https://pages.ebay.com.au/Buyer_coupons/psnooze/index_app.html](https://pages.ebay.com.au/Buyer_coupons/psnooze/index_app.html)

This is a live page on the eBay Website.

The purpose of this test is to show that you are able to parse data and also you have a basic understanding of how react works. Regarding the complexity of the solution we will leave that up to you. Please bear in mind whilst we always appreciate ‘clever’ solutions there is also a balance required to implement an efficient solution.

Please submit a link to a github repo with your solution once completed.

We look forward to seeing your solutions!
