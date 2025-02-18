function beforeCancelProcess(colleagueId, processId) {
    log.warn("#### SOLICITACAO DE CANCELAMENTO DA SOLICITACAO " + processId);
    hAPI.setCardValue("dataFinalizacao", obterDataCorrente());
    hAPI.setCardValue("situacao", "Cancelado");
}