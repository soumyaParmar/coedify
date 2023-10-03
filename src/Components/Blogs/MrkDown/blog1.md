

<h1 style="color:#29bb89; padding-top:3rem ">  Circuit breaker pattern </h1>
<br>
<br>
# Use Case of implementing Circuit Breaker Pattern in Java Spring Boot 

 
By - Maarif-Ul-Haque
<br>
<br>
<br>
 

<h2 style="color:#29bb89"> Problem Statement: Unreliable Third-Party API </h2>

Our stock trading application relies on a third-party API to fetch the latest news related to specific stock symbols. This feature is crucial for our users to stay informed about market trends. However, we encountered a recurring problem: the third-party API occasionally faced downtime and unresponsiveness. This resulted in a significant degradation of our application's performance, as it waited for the API calls to complete. Users experienced slow response times and, in some cases, timeouts. <br>
<br>


 
 

<h1 style="color:#29bb89"> Available Solutions: </h1>
<br>

 

<h2 style="color:#29bb89"> 1. Retry Mechanism </h2>

<h3 style="color:#29bb89"><strong> Pros: </strong></h3> 
<br>


- Automated retries can potentially mitigate the issue by reattempting API calls. 

- Simple to implement. 

<h3 style="color:#29bb89"><strong> Cons: </strong></h3> 
<br>


- May put additional load on the third-party API, potentially exacerbating the issue. 

- Does not offer a guaranteed solution for unresponsiveness. 

 

<h2 style="color:#29bb89"> 2. Fallback Mechanism </h2>
<br>


<h3 style="color:#29bb89"><strong> Pros: </strong></h3> 
<br>


- Provides an alternative data source or cached data when the API is unresponsive. 

- Ensures a smoother user experience during downtime. 

<h3 style="color:#29bb89"><strong> Cons: </strong></h3> 
<br>


- May result in potentially outdated news, impacting the quality of service. 

 

<h2 style="color:#29bb89"> 3. Circuit Breaker Pattern </h2>

<h3 style="color:#29bb89"><strong> Pros: </strong></h3> 
<br>


- Enhances the resilience of the application. 

- Improves application performance during downtime. 

- Efficiently conserves resources and avoids overloading the third-party service. 

- Offers controlled recovery when the API becomes responsive again. 

<h3 style="color:#29bb89"><strong> Cons: </strong></h3> <br>


- Requires additional configuration and code implementation. 

 

# Our Choice: The Circuit Breaker Pattern 

We chose to implement the Circuit Breaker Pattern for the following reasons: <br>
<br>


<h2 style="color:#29bb89"> Resilience </h2><br>


The Circuit Breaker Pattern is designed to enhance the resilience of our application by preventing cascading failures. It allows us to gracefully handle the unresponsiveness of the third-party API without adversely affecting the user experience. <br>


<h2 style="color:#29bb89"> Improved Performance </h2>



By implementing the Circuit Breaker Pattern, we can significantly improve the application's performance. When the circuit is open, instead of waiting for API calls to time out, we can provide users with timely fallback data, ensuring a faster response. <br>


<h2 style="color:#29bb89"> Efficient Resource Usage </h2>
<br>


The Circuit Breaker Pattern prevents our application from sending repeated requests to the failing API, which conserves resources and avoids overloading the third-party service. This, in turn, contributes to a more stable and reliable application. <br>


<h2 style="color:#29bb89"> Controlled Recovery </h2>


The pattern's "Half-Open" state enables controlled recovery. After a defined duration, we can allow a limited number of test requests to pass through to verify if the third-party API has become responsive again. This gradual recovery approach ensures that we don't overload the API immediately after it recovers. <br>


 

# Java Libraries for Implementing the Circuit Breaker Pattern 

 

Before diving into our implementation, let's briefly explore the available Java libraries for implementing the Circuit Breaker Pattern. Some popular libraries include: 

<h2 style="color:#29bb89"> Resilience4J </h2>

Resilience4J is a lightweight, easy-to-use library for implementing various resilience patterns, including the Circuit Breaker Pattern. It offers extensive configuration options and integrates seamlessly with Spring Boot. 

<h2 style="color:#29bb89"> Hystrix </h2>

Hystrix, created by Netflix, was one of the early libraries for implementing the Circuit Breaker Pattern. While it has been widely used, it's now in maintenance mode, and Resilience4J is often recommended as a more modern alternative. 

<h2 style="color:#29bb89"> Apache Commons Lang </h2>

Apache Commons Lang is a general-purpose library that includes a simple circuit breaker implementation. However, it lacks some of the advanced features and monitoring capabilities offered by dedicated resilience libraries like Resilience4J. 

 

# Why We Chose Resilience4J 

Among the available libraries, we opted for Resilience4J for the following reasons: 

<h2 style="color:#29bb89"> Modern and Actively Maintained </h2>

Resilience4J is actively maintained and regularly updated. This ensures that we have access to the latest features, improvements, and bug fixes. 

<h2 style="color:#29bb89"> Seamless Spring Boot Integration </h2>

As our application is built on the Spring Boot framework, Resilience4J offers excellent integration with Spring. This makes it easy to configure and use circuit breakers within our application. 

<h2 style="color:#29bb89"> Comprehensive Documentation </h2>

Resilience4J boasts comprehensive and user-friendly documentation. This documentation helped us understand the library's features, configurations, and best practices, making our implementation process smoother. 

<h2 style="color:#29bb89"> Rich Set of Features </h2>

Resilience4J provides a rich set of features for implementing various resilience patterns, not just the Circuit Breaker Pattern. This means we can rely on the same library for other resilience needs that may arise in the future. 

 

# Implementing the Circuit Breaker Pattern in Spring Boot using Resilience4 

Now, let us explore the practical steps we took to implement the Circuit Breaker Pattern in our stock trading application. 

<h3 color="green"> Step 1: Add Resilience4J Dependency </h3>

First step is to add the Resilience4J dependency to your Maven or Gradle project: 

- Maven: 

 

<div style="background-color:black; border:2px solid white; padding:20px; border-radius:5px">
    ``` xml
       <dependency> 

            <groupId>io.github.resilience4j</groupId> 

            <artifactId>resilience4j-spring-boot2</artifactId> 

            <version>1.7.0</version> 

       </dependency>  
    ```
</div>


<h2 style="color:#29bb89"> Step 2: Configure Circuit Breaker </h2>

A configuration bean for the Circuit Breaker, where we define its settings. This can be done in a Spring *@Configuration* class. 

<div style="background-color:black; border:2px solid white; padding:20px; border-radius:5px ">
```java
    import io.github.resilience4j.circuitbreaker.CircuitBreakerConfig; 

    import org.springframework.context.annotation.Bean; 

    import org.springframework.context.annotation.Configuration; 

    import java.time.Duration; 



        @Configuration 

        public class CircuitBreakerConfiguration { 
        

            @Bean 

            public CircuitBreakerConfig customCircuitBreakerConfig() { 

            return CircuitBreakerConfig.custom() 

            .failureRateThreshold(20) 

            .slidingWindowSize(5) 

            .waitDurationInOpenState(Duration.ofSeconds(30)) 

            .permittedNumberOfCallsInHalfOpenState(3) 

            .build(); 

    } 

} 
```
</div>

Here we create a configuration bean for the circuit breaker and define its settings. We can also fetch these setting values from the yml file or environment variables. 

 

<h2 style="color:#29bb89"> Step 3: Service Implementation </h2>

Our StockNewsService makes use of the Circuit Breaker with the *@CircuitBreaker* annotation. 

 
<div style="background-color:black; border:2px solid white; padding:20px ; border-radius:5px">
``` java
    import io.github.resilience4j.circuitbreaker.CircuitBreaker; 

    import org.springframework.beans.factory.annotation.Autowired; 

    import org.springframework.stereotype.Service; 

 
 

    @Service 

    public class StockNewsService { 

 

        private final CircuitBreaker circuitBreaker; 

        

            @Autowired 

            public StockNewsService(CircuitBreaker circuitBreaker) { 

            this.circuitBreaker = circuitBreaker; 

            } 

    

            @CircuitBreaker(name = "stockNewsService", fallbackMethod = "fallbackNews") 

            public StockNewsResponse getStockNews(String stockSymbol) { 

            // Call the third-party API to fetch stock news 

            // ... 

            // If successful, return the response 

            return stockNewsResponse; 

            } 

    

            public StockNewsResponse fallbackNews(String stockSymbol, Exception e) { 

            // Fallback method when the Circuit Breaker is open or when there's an error 

            // You can return a default response or new instance 

            return new StockNewsResponse(); 

        } 

     } 
```
</div>
 
 
 

The *@CircuitBreaker* annotation is used to specify the Circuit Breaker name (in this case, "stockNewsService") and the fallback method, which is called when the Circuit Breaker is open or an exception occurs. 

The fallbackNews method is the fallback method that returns a new instance of the StockNewsResponse class when the Circuit Breaker is open or an error occurs. 

With this setup, when the Circuit Breaker is open (due to failures or unresponsiveness from the third-party API), the fallbackNews method will be invoked, returning a new instance of StockNewsResponse. This ensures that your application remains responsive even when the external service encounters issues. 

 
 

<h1 style="color:#29bb89"> Conclusion </h1>

Implementing the Circuit Breaker Pattern in our stock trading application has significantly enhanced its resilience and improved user experiences. In the volatile world of stock trading, every second counts, and our commitment to delivering high-quality service, even in the face of unreliable third-party APIs, remains unwavering. By embracing this pattern, we've secured a more robust, responsive, and user-centric trading platform. The choice of Resilience4J as our library of choice exemplifies our commitment to modern, reliable, and maintainable solutions in our software stack. 

 