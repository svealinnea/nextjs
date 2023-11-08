export default function Page() {
  return (
    <div className="container mx-auto py-12">
      <h1 className="text-2xl font-semibold mb-4">
        Describe how you solved a challenge that one of your previous teams faced.How did you determine your solution was successful?
      </h1>
      <p className="text-sm opacity-50">
        When I joined The Mom Project we used slack as our way of taking requests from Account Executives on errors that they were seeing. Having a dedicated slack channel caused problems because: 
        1. You had to be a part of the channel in order to see the requests so if I had a request that came in and I needed to tag an engineer to take a look they would need to have already been in that channel to see the messages, this caused for a lot of interuption.
        2. You couldnt easily route the information in slack to the platform the customer service team was using
        3. Any sort of data analytics or request tracking was out the door. 

        In order to solve this problem I suggested that we implement the Zendesk ticketing system. Zendesk is great because it is a dedicated system that allows for routing to other teams, wont ping an engineer unless absolutely neccesary and allows for data analytics.
        I did a lot of research though before I presented zendesk, there are other options out there like freshdesk. Zendesk though had all the features we needed and could eliminate not only my teams use of slack but other teams use of other software. 
        This solution was successful because we were able to cut down response time to customer by 30% and we were able to track the amount of requests coming in and out of the system.
      </p>
    </div>
  )
}