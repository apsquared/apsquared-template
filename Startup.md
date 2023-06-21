
# Getting Started

## Help
* https://github.com/vercel/app-playground/tree/main
* Env Variables https://nextjs.org/docs/app/building-your-application/configuring/environment-variables


## Assumptions

* You have an account on github
* You have purchased your domain name

## Database setup
* Use Mongo Atlas (either new account or new deployment on existing)
* Setup user with password 
* Update ENV variables with MONGODB_URI
* Update dbutil/dbmain.ts with appropriate names

## Email Setup

* Create via Google Workspace

## Clone The Repo

## Auth Setup

### Google

Follow: https://next-auth.js.org/providers/google to get client_id and secret

Note: still seem to need to run npm i next-auth@0.0.0-pr.7214.4142955d for

Set envs:

GOOGLE_CLIENT_ID=""
GOOGLE_CLIENT_SECRET=""

Helpful link: https://codevoweb.com/setup-and-use-nextauth-in-nextjs-13-app-directory/

## Cloning Repos

To create a copy of a GitHub repository as a new, independent repository, you would usually perform a procedure known as "cloning" the repository, then "pushing" it to a new repository. Here's a step-by-step guide on how to do this:

Clone the existing repository to your local machine:
You can clone the repository with this command in your terminal (replace repo_url with the URL of the repository you want to clone):

bash
Copy code
git clone https://github.com/original/repo_url.git
Create a new repository on GitHub:
Head to GitHub and create a new repository. Do not initialize it with a README, .gitignore, or License. This needs to be an empty repository.

Change the remote URL to your new repository:
Now navigate into the cloned directory (substitute repo_name with the name of your repository):

bash
Copy code
cd repo_name
Then, remove the existing origin:

bash
Copy code
git remote remove origin
And add the new origin (replace new_repo_url with the URL of the new repository you just created):

bash
Copy code
git remote add origin https://github.com/username/new_repo_url.git
Push the code to the new repository:
Finally, you can push the existing code to your new repository:

bash
Copy code
git push -u origin master
Or, if you're using the main branch:

bash
Copy code
git push -u origin main
Your cloned repository is now copied and available as a brand-new repository.

Remember, this method creates a new repository with a copy of the original repository's content, but it will not carry over issues, pull requests, wiki, or settings of the original repository.

The whole history of the repository will be copied over to the new repository. If you do not want to copy the entire history, you may want to create a new repository, manually copy over the files and then make an initial commit.
