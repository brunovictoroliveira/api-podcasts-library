import { IncomingMessage, ServerResponse } from "http";

export const getListEpisodes = async (
  req: IncomingMessage,
  res: ServerResponse
) => {
  res.writeHead(200, { "Content-Type": "application/json" });
  res.end(
    JSON.stringify([
      {
        podcastName: "inteligência ltda",
        episode:
          "FILOSOFIA X RELIGIÃO: RODRIGO SILVA E CLÓVIS DE BARROS - Inteligência Ltda. Podcast #1616",
        videoId: "nPRACaxcCUk",
        category: ["filosofia", "religião"],
      },
      {
        podcastName: "inteligência ltda",
        episode:
          "O PLANO SECRETO DE TRUMP: DANIEL LOPEZ - Inteligência Ltda. Podcast #1610",
        videoId: "_CpPNo5Y-1w",
        category: ["política", "religião"],
      },
    ])
  );
};
