/*
Node.js project architecture best practices | https://blog.logrocket.com/node-js-project-architecture-best-practices/

- Having a good starting point when it comes to our project architecture is crucial for the longevity of the project itself and for effectively addressing future changing needs. 

- A poorly designed project architecture often leads to:
    - Unreadable and disorganized code, resulting in prolonged development processes and making the product itself more challenging to test
    - Unnecessary repetition, making the code harder to maintain and manage
    - Difficulties in implementing new features without interfering with existing code

- Everything has to have its place in our application, and the folder structure is the perfect place to start organizing things.

- The separation of concerns refers to the practice of organizing code and components in a way such that each module or component has a clear and distinct responsibility:

- By establishing an organized folder structure, you can group related files and components together, making it easier to locate and manage specific functionalities.

- The next best practice to organize your Node.js project architecture is to break your application into smaller modules, each handling a specific functionality.

- It’s also recommended to minimize the use of global variables as they can lead to tightly-coupled code and make it challenging to identify dependencies. Instead, encapsulate variables within modules and expose only the necessary interfaces.

- If the code of a class, function, or file becomes excessively lengthy, consider splitting it into smaller modules wherever possible and bundle them within related folders. This approach helps in grouping related files together and is essential for enhancing code modularity and organization.

- When writing complex code that is hard to comprehend, it is vital to ensure clarity through improved naming conventions or comments. 

- While comments can be helpful, they are often not updated and can potentially provide outdated information.

*/