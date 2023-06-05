import React from "react";

function DivOfCountry() {
  const createEpisodesDiv = (episodes) => {
    createEpisodeSelect(currentEpisodes);
    try {
      // clear all the old display elements
      showslisting.innerHTML = "";
      // reset button is added
      rootElement.classList.add("showResetButton");
      // add episode search bar
      document.getElementById("searchInputEpisodes").style.display = "block";
      // if there are any episodes cards they would be removed
      const showsSearchBar = document.getElementById("searchInputShows");
      if (showsSearchBar) {
        // remove shows search bar
        document.getElementById("searchInputShows").style.display = "none";
        // remove shows drop down bar
        document.getElementById("show-select").style.display = "none";
      }

      // remove the old pagination
      const paginationElement = document.getElementById("pagination");
      paginationElement.remove();

      // if there are any shows cards they would be removed
      const ifEpisodesListingExist = document.getElementById("episodeslisting");
      if (ifEpisodesListingExist) {
        episodeslisting.innerHTML = "";
      }
    } catch (err) {
      console.log(err);
    }
    //
    //
    // Get the current page number
    var currentPage = 1;
    function showEpisodes(page) {
      const episodesListing = document.getElementById("episodeslisting");
      if (!episodesListing) {
        const newEpisodesListing = document.createElement("div");
        newEpisodesListing.id = "episodeslisting";
        rootElement.appendChild(newEpisodesListing);
      } else {
        episodesListing.innerHTML = "";
      }

      const startIndex = (page - 1) * ITEMS_PER_PAGE;
      const endIndex = startIndex + ITEMS_PER_PAGE;
      const paginatedEpisodes = episodes.slice(startIndex, endIndex);

      paginatedEpisodes.forEach((episode) => {
        let imageCard = "";
        try {
          imageCard = episode.image.medium;
        } catch (err) {
          imageCard = "https://static.tvmaze.com/images/no-img/no-img-portrait-text.png";
        }
        elemSummary = shortenText(episode.summary, 200);

        const episodeCard = document.createElement("div");
        episodeCard.className = "episode-card";
        episodeCard.innerHTML = `      
        <h3>${episode.name}</h3>
        <p>S${episode.season.toString().padStart(2, "0")}E${episode.number.toString().padStart(2, "0")}</p>
        <img src="${imageCard}" alt="${episode.name}">
        <p>${elemSummary}</p> 
        <p>Airdate: ${episode.airdate}</p>
      `;

        document.getElementById("episodeslisting").appendChild(episodeCard);
      });
    }

    // Show the first page of episodes initially
    showEpisodes(currentPage);

    const totalPages = Math.ceil(episodes.length / ITEMS_PER_PAGE);

    // Create pagination links
    var pagination = document.createElement("div");
    pagination.id = "pagination";
    rootElement.appendChild(pagination);

    // Generate pagination links
    for (var pageNum = 1; pageNum <= totalPages; pageNum++) {
      var pageLink = document.createElement("a");
      pageLink.textContent = pageNum;
      pageLink.setAttribute("href", "#");
      pageLink.addEventListener(
        "click",
        (function (pageNum) {
          return function (event) {
            event.preventDefault();
            showEpisodes(pageNum);
          };
        })(pageNum)
      );
      pagination.appendChild(pageLink);
    }
  };
}
