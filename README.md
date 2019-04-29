# Discover TV
**My bloc project assessment**

This project aims to solve the problem of simplifying the discovery of television shows and movies.
While there are some tv/movie discovery apps out there many of them have complex interfaces,
require accounts or are filled with adds.  Discover TV has a simple interface that lets you
browse popular shows/movies or search for specific content without the need for a user account.
If you want to get more out of the app you can create an account with your email which
allows you to add shows/movies to your watchlist so you can save your discoveries.  

Discover TV is built with react and redux while using firebase as a backend.  In addition
it uses the Movie Database API to get tv/movie info.  I opted to choose react for this
project as I wanted to create a single page web app and react's Virtual DOM allows for
this with the added benefit of faster renders.  React's use of components also made the project's
logic and flow easy to reason with and allowed for the reuse of some of the components
making the development quick.  React has a large community and good documentation which also
made me confident in the decision as if I ran into any issue I would be able to figure
out solutions.  I oped to add in redux for better state management and use with firebase.
As I continue building out this app redux will become even more useful as state becomes
harder to manage with more stateful components.  Firebase is a no SQL database that I
chose to use for this project as it is very simple and quick to set up and allows for
easy storage and manipulation of data.  It also has a range of useful features as the
project grows.  I feel these technologies were a very good fit for this project and
allowed me to create this within the week timeframe.

There were some trade offs when choosing these technologies.  One is that react isn't
very opinionated which means things like project structure where all up to me to figure out.
Also using redux for state management on an app so early caused some additional work in getting
it all set up even though I believe it will pay off as the app becomes more complex.  
On top off all this with firebase being no SQL there was a bit of a learning curve as
much of my work has been with relational databases.    

The time constraints also caused some issues that I would approach differently if
time had permitted.  First being in Bloc's curriculum there wasn't much on the topic of testing
react apps.  So I had to do some quick research to figure out effective ways to test my components.  
While I am comfortable with TDD in a framework such as Rails as I have a good amount of experience with rspec, I was a little hesitant that I would be able to figure out testing in this short period of time.  
Due to this I opted to use Behavior Driven Development when creating the application while using
Jest and Enzyme to write the testing suite to the best of my ability.  If I had more time on this project I would like to spend it on creating more test and getting greater coverage.  In addition to this I realize
I need to continue learning on the topic of javascript testing.  

In addition to this I would also like to send more time on the styling and CSS.  Because of the time constraints I used materalize css to help with styling the application.  With more time I would add more styling to make the interface easier to navigate and use in addition to helping with some styling anomalies that arose.      

All in all I believe this project solves the problem of being able to easily discover new
TV shows and movies effectively using technologies that fits the project's goals.  
