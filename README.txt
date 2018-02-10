Assumtions/decisions,

1. Based on spec I presumed there was no need of a search bar but allowed easy
future implementation by making the unsplash.js service open to any search without change.

2. left as just index.html without routing or extas due to only the one page needed.
and no need for a landing page.

3. Separated services in a modular design pattern but deemed the index to be too simple to need to
seperate code further. In larger applications futher seperation may be required.

4. In a live version toasts would be preferable to console.log errors

5. Chose to use Jquery instead of Angular 2 due to ease of checking, and better familiarity
within organisation of rawpixel. 
Angular 2 would have allowed much easier seperation and simplification of code.

6. b-lazy as plugin was used for lazy loading, Used quick thumbnails for lazy loading as
 placeholders while large more detailed pictures were being loaded. 

7. "need images to be lazy loaded and paginated with manually-triggered	infinite"
was taken to mean as shown in picture just a button for show more that loaded another
pages worth of results below. Not that numbered pagination was needed.

8. filtering was done from dropdown select. many more options could be added easily
or a search bar could be added with little effor due to unsplash service that
was made to except all search terms.

9. used justified gallery as grid, in hindsight a better more flexible grid plugin
 would have been prefered.

