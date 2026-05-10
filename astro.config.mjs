---
---

<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />

    <title>RLT Music & Filmworks</title>

    <style>
      *{
        margin:0;
        padding:0;
        box-sizing:border-box;
      }

      html,
      body{
        width:100%;
        height:100%;
      }

      body{
        background:#000;
        color:#fff;
        font-family:Arial, Helvetica, sans-serif;
        overflow-x:hidden;
      }

      .hero{
        position:relative;

        width:100%;
        min-height:100vh;

        background:
          linear-gradient(
            rgba(0,0,0,.45),
            rgba(0,0,0,.45)
          ),
          url("/images/rlt-homepage.png");

        background-size:cover;
        background-position:center;
        background-repeat:no-repeat;

        display:flex;
        justify-content:center;
        align-items:center;

        text-align:center;
      }

      .content{
        padding:40px;
      }

      h1{
        font-size:4rem;
        letter-spacing:4px;
        margin-bottom:20px;
      }

      p{
        font-size:1.3rem;
        line-height:1.6;
        max-width:900px;
        margin:auto;
      }

      .buttons{
        margin-top:40px;

        display:flex;
        gap:20px;
        justify-content:center;
        flex-wrap:wrap;
      }

      .btn{
        padding:15px 35px;
        border:2px solid #fff;
        color:#fff;
        text-decoration:none;
        transition:.3s ease;
      }

      .btn:hover{
        background:#fff;
        color:#000;
      }

      @media (max-width:768px){

        h1{
          font-size:2.5rem;
        }

        p{
          font-size:1rem;
        }

      }
    </style>
  </head>

  <body>

    <section class="hero">

      <div class="content">

        <h1>RLT MUSIC & FILMWORKS</h1>

        <p>
          Real Music. Real Stories. Real Impact.
          <br />
          Music • Film • Culture • Legacy
        </p>

        <div class="buttons">
          <a href="/music" class="btn">Explore Music</a>
          <a href="/films" class="btn">View Films</a>
        </div>

      </div>

    </section>

  </body>
</html>
