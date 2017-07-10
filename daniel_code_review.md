# Code Review
## Introduction
I’ve recognised some things which can be done better. I show you the things here.

## Code Refactors
### HTML and Less: Creating the Links with Icons in the footer
```
            <div class='row'>
                <div class='one-row side-pad col-lg-6 col-md-12 col-sm-12 col-xs-12'>
                    <table>
                        <tr>
                            <td><img class="logos" src="img/letter.png"> </td>
                            <td><div class="contact-cell"> kontakt@fakenewsgraph.de </div></td>
                        </tr>
                    </table>
                </div>

                <div class='one-row side-pad col-lg-6 col-md-12 col-sm-12 col-xs-12'>
                    <table>
                        <tr>
                            <td><a href="https://twitter.com/FakeNewsGraph"> <img class="logos" src="img/twitter.png"></a> </td>
                            <td><div class="contact-cell"> <a href="https://twitter.com/FakeNewsGraph">FakeNewsGraph</a> </div></td>
                        </tr>
                    </table>
                </div>

            </div>
```

#### 1.
First of all, you can use

```
<a href=„mailto:kontakt@fakenewsgraph.de“>kontakt@fakenewsgraph.de</a>
```

so on a click, the email client gets opened and the user can send a mail directly.

#### 2.
Use

```
<a href="https://twitter.com/FakeNewsGraph" target="_blank">FakeNewsGraph</a>
```

The attribute `target="_blank"`  opens a new tab in the browser.

#### 3.
Don’t use a table here. If you wanna use a 2 row table, there is also the [description list tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dl)

#### 4.
I’ve refactored the whole thing with less:


```
//html
<div className="contact-email">
    <a href="mailto:kontakt@fakenewsgraph.de">kontakt@fakenewsgraph.de</a>
</div>

<div className="contact-twitter">
    <a href="https://twitter.com/FakeNewsGraph" target="_blank">FakeNewsGraph</a>
</div>
```

```
//mixins.less
.icon-link(@content) {
  position: relative;
  padding: 11px 0 0 46px;
  display: inline-block;

  &:before {
    position: absolute;
    font-family: FontAwesome;
    content: @content;
    top: 0;
    left: 0;
    font-size: @icon-link-font-size;
  }
}
```

```
//variables_bootstrap_overrides.less
@icon-link-font-size: ceil(@font-size-base * 2);
```

```
//footer.less
  .contact-email {
    a {
      .icon-link('\f0e0');
    }
  }

  .contact-twitter {
    a {
      .icon-link('\f099');
    }
  }
```

### Less: Bootstrap Scaffolding
I’ve recognised that you do things like:

```
body {
  font-size: 200%;
  color: @blue-dark;
}
```

These things are all scaffolded by bootstrap, so before changing something like this, have a look at the variables file if there is a variable for it.

### Less: Variables
Just put all variables into the variables_bootstrap_overrides.less so there is only one file with variables. I’ve you place them there in a belonging section, you might find a variable describing the same thing, so you don’t have to declare a new one for it. I place component variables after the colors in the file: 

```
//colors
…
//components
//component_name1
…
//component_name2
…
```