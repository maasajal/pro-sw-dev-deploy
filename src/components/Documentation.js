import React from "react";

const Documentation = () => {
  return (
    <main>
      <hr />
      <h2>Documentation</h2>
      <h3>Netlify App</h3>
      <p>
        Netlify app is a free hosting and subdomain site for developer who wants
        to publish their app as demo. But they have paid version also.
      </p>
      <p>
        Create user account on Netlify app then user can be able to Add new
        site. There are three options to add new site. I used Deploy manually
        for my company project because, I had not had admin access of company
        GitHub repository.
      </p>
      <img src="deploymanually.png" alt="Deploy manuallly" />
      <h3>Drag and Drop</h3>
      <p>
        From my React project, build the project by npm run build command. In
        the directory, there is a build folder created to publish the site. Drag
        and drop the build folder to the Netlify drop point.{" "}
      </p>
      <img src="drapdrop.png" alt="Deploy drap drop" />
      <img src="defaultlink.png" alt="Deploy defaulturl" />
      <img src="customurl.png" alt="Deploy customurl" />
      <h3>GitHub connection</h3>
      <p>
        My plan is to deploy the site automatically using GitHub. So, I linked
        the project to Git repository. Allow authentication for access GitHub
        project.{" "}
      </p>
      <img src="linkgithubrepo.png" alt="Deploy linkgithubrepo" />
      <p>
        When Netlify will be connected to GitHub account, choose one project
        which one user wants to deploy automatically. Then deploy site…..
      </p>
      <img src="linkgithubproject.png" alt="Deploy linkgithubproject" />
      <p>
        There is a common mistake in build command (npm run build) in Netlify
        build settings. The site will not deploy automatic until the build
        command change. Build command should be “CI= npm run build”. Open Build
        settings and change the build command then save it. Now it will work
        perfectly.
      </p>
      <img src="buildsettings.png" alt="Deploy buildsettings" />
    </main>
  );
};

export default Documentation;
