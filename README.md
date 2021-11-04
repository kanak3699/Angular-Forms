<!--- The following README.md sample file was adapted from https://gist.github.com/PurpleBooth/109311bb0361f32d87a2#file-readme-template-md by Gabriella Mosquera for academic use --->
<!--- You may delete any comments in this sample README.md file. If needing to use as a .txt file then simply delete all comments, edit as needed, and save as a README.txt file --->

# Lab / Assignment / Project Title

Lab 5 - Creating a Web Form using Angular

- _Date Created_: 01-11-2021 (DD-MM-YYYY)
- _Last Modification Date_: 03-11-2021 (DD-MM-YYYY)

## Authors

- [Kanak Prajapati](kn436428@dal.ca) - Developer

## Getting Started

The maker will be able to use the website from the web browser.

URL for the Website - https://web.cs.dal.ca/~kprajapati/csci3172/lab5/

URL for the Code - https://git.cs.dal.ca/kprajapati/l5_prajapati_kanak (Project ID - 37630)

### Installing

For the website - The marker can simply go the the above provided URL to check the user interface of the website and use it.

For the Code - The code is available on the gitlab, which is shared through the email invitation as well as the link https://git.cs.dal.ca/kprajapati/l5_prajapati_kanak (Project ID - 37630).

## Deployment

The website is deployed and hosted through Timberlea Server.

## Built With

<!--- Provide a list of the frameworks used to build this application, your list should include the name of the framework used, the url where the framework is available for download and what the framework was used for, see the example below --->

- [Angular](https://angular.io/) - Framework

## Sources Used

If in completing your lab / assignment / project you used any interpretation of someone else's code, then provide a list of where the code was implement, how it was implemented, why it was implemented, and how it was modified. See the sections below for more details.

### File Name - index.html

```
<link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
      rel="stylesheet"
      integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
      crossorigin="anonymous"
    />

    <script
      src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"
      integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p"
      crossorigin="anonymous"
    ></script>
```

The code above was created by adapting the code in [BootStrap](https://getbootstrap.com/docs/5.1/getting-started/introduction/)

```
<link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
      rel="stylesheet"
      integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
      crossorigin="anonymous"
    />

    <script
      src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"
      integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p"
      crossorigin="anonymous"
    ></script>
```

- The code in [BootStrap](https://getbootstrap.com/docs/5.1/getting-started/introduction/) was implemented by getbootstrap.com.

- [BootStrap](https://getbootstrap.com/docs/5.1/getting-started/introduction/)'s code was used to implement bootstrap in the website.

- [BootStrap](https://getbootstrap.com/docs/5.1/getting-started/introduction/)'s script was not modified because the syntax has to match to make bootstrap work.

### File Name - app.module.ts

```
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';

MatInputModule,
MatSelectModule,
MatButtonModule,
```

The code above was created by adapting the code in [Angular Material](https://material.angular.io/components/)

```
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';

MatInputModule,
MatSelectModule,
MatButtonModule,
```

- The code in [Angular Material](https://material.angular.io/components/) was implemented by material.angular.com (Angular).

- [Angular Material](https://material.angular.io/components/)'s code was used to implement Angular Material Design Componenets in the website.

- [Angular Material](https://material.angular.io/components/)'s script was not modified because the syntax has to match to make components work.

### File Name - app.components.ts

```
^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[ -/:-@[-`{-~]).{6,64}$
```

The code above was created by adapting the code in [Stackoverflow](https://stackoverflow.com/questions/30299464/pattern-password-javascript)

```
^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[ -/:-@[-`{-~]).{6,64}$
```

- The code in [Stackoverflow](https://stackoverflow.com/questions/30299464/pattern-password-javascript) was implemented by Wiktor Stribiżew.

- [Stackoverflow](https://stackoverflow.com/questions/30299464/pattern-password-javascript)'s code was used to implement the pattern for password.

- [Stackoverflow](https://material.angular.io/components/)'s script was not modified because the syntax has to match to make password pattern work.

```
get f() { return this.registerForm.controls; }
```

The code above was created by adapting the code in [jasonwatmore.com](https://jasonwatmore.com/post/2019/05/22/angular-7-tutorial-part-5-registration-form-user-service)

```
get Register() {
    return this.registrationForm.controls;
  }
```

- The code in [[jasonwatmore.com](https://jasonwatmore.com/post/2019/05/22/angular-7-tutorial-part-5-registration-form-user-service) was implemented by Wiktor Stribiżew.

- [jasonwatmore.com](https://jasonwatmore.com/post/2019/05/22/angular-7-tutorial-part-5-registration-form-user-service)'s code was used to implement the register method to control the form.

- [jasonwatmore.com](https://jasonwatmore.com/post/2019/05/22/angular-7-tutorial-part-5-registration-form-user-service)'s script was modified by changing the the statements as per needed for the lab. The changes include function name change and property change.

### File Name - app.components.ts

```
[a-zA-Z_][a-zA-Z0-9_]*
```

The code above was created by adapting the code in [Stackoverflow](https://stackoverflow.com/questions/26596297/regex-not-beginning-with-number)

```
[a-zA-Z_][a-zA-Z0-9_]*
```

- The code in [Stackoverflow](https://stackoverflow.com/questions/26596297/regex-not-beginning-with-number) was implemented by abarnert.

- [Stackoverflow](https://stackoverflow.com/questions/26596297/regex-not-beginning-with-number)'s code was used to implement the pattern for username.

- [Stackoverflow](https://stackoverflow.com/questions/26596297/regex-not-beginning-with-number)'s script was not modified because the syntax has to match to make username pattern work.

### File Name - styles.scss

The image used for the background is under Unsplash License (Creative Commons License) and its policies can be found below:

[Unsplash](https://unsplash.com/license)

The image design was published on January 13, 2019 and was designed by [Pawel Czerwinski](https://unsplash.com/photos/QY9LOl9eZ9w)

## Acknowledgments

- I would like to acknowledge Professor Gabriella Mosquera for the [template](https://dal.brightspace.com/d2l/le/content/185370/viewContent/2678574/View), angular.io, mateial.angular.io, stackoverflow, and jasonwatmore.com because While solving the Angular errors, I have referred to the these websites and templates.
