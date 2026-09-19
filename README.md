# GroundWorks

Projeto estático para um único deploy na Hostinger:

- `/` — GroundWorks Directory (página inicial);
- `/profile.html?id=...` — perfil de um profissional;
- `/systems/` — GroundWorks Systems;
- `/directory/` — redirecionamento de compatibilidade para a página inicial.

Os dois sites compartilham o mesmo repositório. No deploy da Hostinger, publique a **raiz do repositório como site estático**; não selecione apenas `systems/` ou `directory/` como diretório de publicação. Não há `package.json` nem etapa de build.

O diretório lê os perfis publicados diretamente do Supabase por meio de `data/config.js` e `directory.js`. Editar profissionais no banco altera a listagem após recarregar a página, sem novo deploy. Mudanças no layout ou na copy exigem novo deploy pelo GitHub/Hostinger.

A pasta local `supabase/` e o arquivo antigo `directory/data/traders.js` ficam fora do GitHub pela configuração do `.gitignore`; não publique esses arquivos manualmente. O código do site usa somente uma chave pública do Supabase. Nunca adicione uma chave secreta ou senha do banco ao repositório.
