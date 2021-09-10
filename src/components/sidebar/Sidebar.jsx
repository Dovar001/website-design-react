import './sidebar.css'

function Sidebar() {
    return (
        <div className="sidebar">
          <div className="sidebar-item">
              
              <span className="sidebar-title">About me</span>

              <img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBYWFRgWFRYYGRgYHBgYGBgaHBgYGBwaGhoZGhoYGBgcIS4lHB4rHxkYJzgmKy8xNTU1GiQ7QDszPy40NTEBDAwMEA8QHxISHzQhJSs0NzQ0NTE0NTE0MTQ0NDQ0NDQ1NTQ0NjE0NjQ0NDQ0NDc0NjQ0NDQxMTQ9NDQ0NDQ0NP/AABEIAQcAwAMBIgACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAAEAQIDBQYABwj/xABEEAACAQIEAwUECAMFBwUAAAABAhEAAwQSITEFQVEGImFxgRMykaEHQlJiscHR8BRygiNTkuHxFSQzorLC0hZDVHOT/8QAGQEBAAMBAQAAAAAAAAAAAAAAAAECAwQF/8QAKBEBAQACAgIBAwIHAAAAAAAAAAECEQMhEjFBBCJRE7EUMmFxgaHB/9oADAMBAAIRAxEAPwCEGmzXV1BwNKTSUsUDkNSColpaCQUs1GKWgfNdNMqO9cCqW3jl1PIUDsRiERczsFXqTH+p8KAHHbY91Lj+Sx/1EVT3ke5cBc/yjkPBfHer/hWBmNOmvUjkJqtyWmKw4f2vsIIuJcTxZJHxUmp8Vj7d0ZrbKy9VIP8AoaCu8OjU6zyPOQBGtZnGcOay4e0Sk9NvEEcx4VEyLi0palU0Dw7GZxDCHABIGxH2l/TlRsVdVIqUdg8NmMUGhoi27KZFBaYjhoVZFUlwa0Y3EHbQ1ALJOtBFFRk11xqjmgkmuqOlU0Da6urqBa6KSuoFiurprqBTXRS0k0HRUmGwRuN91QAestm/JfnUU1pOz1tRZuOxAl1C8tQNfkfnVcvS2PtFZ7LIyzmIPTceRqXA9n2D94qoGxGs6chyq7wToRuPyozujp8ayjSqPG8EhdHmOu8fuPhWV4pw/r9bT/OvQL1xdYIrOcbwDuMyAkqdV8N5FL7J6ZDDYIr3/snfWSp0I8taPy1Z4KyCjqRupbyAgafGggtaz0zy9owKsMDroaht2xVjg8gjrVlS/wCy9QRTsdhsqaCry0wih8eyxrQY90PSo8tW968vSgncUAyrT0SnF6QmgHJrqIwuHzNFGYrhwUUFWKWnvZioCaB5rqjL12agkrqjzUuagJwtjO6ICBnYLJ2EnUmiON8NY2ERENxy91wAxVcogZ2YECO6Y60BbulSGG4II8xWqsELhbMQdGHgFLEgHxEgelUz3pfHW3nOEwePRi6FsqkQAzQQfuuTHTatl2l4dfNm2yXHLMO+oYqNdzK61d27eaFka6nUCAN6Kxl9MqAMsgbSNulZb3201p5WOG41CGKl5JDJ7S4CoEEa5zM6/Ctv2Sxl1W/tLdxFcAQ5zZTuCD8q0VoqVDADUDyNB3sTLgaCSNB0qfI17VV18mJvo4C2lt55iW/tJIyaa6zp4VU3HEmFdIMQ5DHnB0A6bVe8ftrcuqyPlKEK2ghlTK0Gf5xVLi3/AOYlyeo1C/Kry3ekanjumB6nwp1oKaItvFaMVviOIFVgGoUx+YQ1VVy7NJnoCsRbgzQwNSrfnQ1EwoEauzU00goC+FXJYVc8QOlUHD2hqtMXdkUAeIGlVjii792hRrQRxXUS9oRIoagSuriKUKaDhWr7KEOj221hlYeRBB+YFZYJVlwTG+xuBj7uzfHf0mfSos6TB/Hr2HCvZvlABlJzMFI17sDfNMbVQWMJgncF8Sl0yCitdOnhyhtOZmtG+S87lWSS+jMAdYHu86lw/DL0kO9kqeiKCdP5awbzWk9riNpwwtEd2AwGwgabVV3sQyvm6bGrPE2ktjuhVMcgBPwrMcc4kqALmB15bz+PSqz2j4WmAunKXcAl3bRhoQIJMbQdPhTMYA2tF2rYFm14oT46nn8KguXFAroxk9ssrfSv9lXMlTo4Y1IbNWVV/s6426NyAmnGxQAC2antp1qf2FL7E0CLYWobtkTpRAtmkC660FcUKmKIu3Dl1q5xGDBMxFUuPOsCgBdqaKQ0lBILukU00yumgeKkWokFTCaB+Rq4AilW6RRuBwF3EHLbTT6znRF8z+Q1oMxxizdw4V0k27gORt4MkFDPOQfOKAPai/MsTpBHTT9/M16li+H20spbeHRWdWJEa5jmIH1YJPwrzrE8IRXZVXSSBrOk1lbNtJvSsfjF1zqzMeQE8/3FXnZzgju/tb3L3FM6eJ61NwnhgzSRtyrb4DAu4hF05sdFHmfyFVt31F5PmkupnFu2mrZSNOWs69BG9UXEOHXrTRcQqCYDbo3k35aGvReF8NSyumrH3m5nwHQURfsq6lXUMp3BAIrTGWTtllZb08ptNlNHPiQRWg4r2PVpbDtlP2GJKf0tuvrNY7G4W5abJcRkPjsfFTsfQ1dVLZud7erVSKzocii8LijMUFvQuIxOUxTL+Mjagbl3NqaC3svmE1BfuQahw2LAEVBiLsmg3j2hFZzHYZJMmp7nGu9lqs4ic3eU0AeItqNqEIrnY86YzUCzSGmE0s0BNphRNmwztlRGdjyUT8elaHgHZJWVbl8nvAMtsSuh1Gdt58B8a12GwyIuVEVF6KAB69fWgy3Cuyn1sR6Ip/62H4D41qrFlUUKihVGygQB6VKBXGoGX4hgrn9ohRmUu7o666XDmysNwQSRVKvZa6x92AebEKP1r0ArShKpcJatMrFFwvszbTV++emyfDdvX4VfooAAAAA2gQPQUqrTqtMZPSLbfbqSlmkqUFqHE4ZHUo6q6n6rCR6dDU4NRzNBluI9i7bSbDtbPJW76eQJ1HxNYxbDKzK4yspIYHcEbivWyay3bTheZP4hB3kgOBzTYN5r+B8KkYh96QClFPUUEEUoqZ4pbNsGg682s0tnEkaGkuih2oJrwB1qBhTlalK0ERWkcd1idgCT8KlcVFimi0/3u58Qf1FB7Omvw0/flQfFeLWcMme+4RJygkMZP2QADr4VBg8W1zDI9tgGe2jA7wGAzEDmR+NBXOJquazilDWrhyKWGYQdAtwHfl3utRtaY2zpVYv6TsEk5FvXPJAgPlnIPyqrvfSsv1MKx/nuKp/5VP41U9s+wT4fNewwa5ZElk1Z7Y3Mc3QddxznesLNSq9Au/SniDOTD2V6Szv8tKAu/SLj2Ojoo6LbT/uk1j5paDVf+v8AH/34/wAFv/xosdteJBM5uJly5oNtM2WQuaI5k/Ks7wnBByXeAiamdmI/Ic/hVvwrEJeuXcw0KqAD/diVOnm0+tVt/Do4+GWTy636X3Zv6SnD5MZqjQBcRMpQ9WVfeTxAkeIr0/D3VdFdGV1YAqykFSDzBG9fN+JwoV2RpzKSp1I25/n61o+wfa84G57K6xbCudZ1Npz9dfuHmPXzsws109tduXWuzVBauB++pBUiVI1BB2IPQ04VWoSFqje2HDI3uuCp8mEH8aUU4VMHlT4NkYo26kqfNTFOFmtZ2jwwF3NHvjN6jQ/l8aobq8qkAewnami0Vq+wGGldRTrvDDQUF4UK4o64tDOtAOKVWpWFNFArVSdocYVyJ9UlyT94BR8O8KuwJrI8cv5wn3Wvj09oD+BA9KJ09Q+izja3LQsMe/ZDrHVGfOhHlLL/AEjrWtvYW2jHEXSAEBKzssfX8W5Dz614Z9H+MNviFg5oDFkOsAhlOh9QK9Q7b4hnVRMIhVj95yJE+CgiB1J6Cq5dL8c3lr1sv/rO57XMEBs7ZNPaRvnzbZvu7ePOq3tH2MtYtDieHlQ5Mva91HO5gfUfwOh8JmqO3ckfL9T6Cf8AKtR2P4bddxfVmRB7xH/u79yNio+1HgOtRjldunm4cJjudPI71tkZkdWV0MMjAhlPQg7V1sAkAmASAT0r2PtLwzB8Rd7SuqYq2IRwN43Q/wB4oJgxqOVea4fCfwWKyY62QFV47qurSAqumZSrjUnUaRrBq+9uPVl7ggC26hHuoiACER05bF3PvHwGnnT7WFRCHsXRnGwLK6kc1aNRPWpv4jhbmWSCVYnKbqrmJXOsZO79fJHKNBtTeIYbhjmVuKpKwQHdABCgXCHQzc0MoNDI61Xwv5dP8RL3Ype0OJzOGyZWIhhIOq6ZgRoykc/CqS45blVr2osYdL3+7MHtsCZDBgCGKlANxGXck5s0jSqcsY7pFWk1HPnl5ZWvfewb/wC4YQj+6Cn0JrULXnf0XcTD4QWye9aYgjmAzEj0givQ7ZqFXKacaYtPoK/jtnNazAaoZ9G0PzisnhbJL69a3dxMyFeoI/SsG2KIfaKkX6KFFBYjHgbUDjeIaaGqx7hOtB1xaFdaLcVCy0AdxajC1O9RRQR4l8iO/wBlS3yMfOKw18H2aE9bnr3lJn4itlxtow7k84HnJ29YisW9zuhTyLkf1Zf/AB+dANbuFHVx9Rlcf0sG/KvbO110Phg42LofCHAYfIivEX/CvRODcXe/wx0cS1h7NtSNWYSPZjxbXL4wKrfTXiv3RYdluCNiW1kWlPfbmYMhF8T15DxrVdreKPZRLNlCiuse0AhQuwt2yNmjc8htPIFsSeHYJElf4i6XIB1Cs0ZmI5hBlXxaOtG8B7TW8SnscSEV2GXX/h3PKfdbbun0NRPWm+Vyyy8tbkYJ9CMsiDKkSCpGzAjY1psNxizibX8NxBA6/VvRBB6sRqjD7Y0PMCk7TdlGtBrlmXtjVkOrp4g/WQCfEeNZzD3BIPI9Onh4ka+oqveLazHmxVvazsRdwc3bTe2w24uCMyqfthdI+8ND4Vk7iEeINemYPi9zDGEh7TTnsv7kHcofqE+oOsih+IdkrWJtNiOHSGTW5hW94HnkH1T0WSp5RtWmOW3Hy8OWH9nm4PUVKLYOxqVrQM8iJBGxBG4I5HwqEpFWYtH2E4icPjEk9y6PZt0k95Cf6gB/Ua98str6V8z4Ow73ES2JdmUL/NMg+AESfAGvo/A3Qckn3lBnzH4VWgxKeKcyCmYi6iLmdlRRuzsFHxNA5DqfjWE41Zi9cUcmJHk3eH41cYrt3w+2QDiVY7f2avcA8yikCgOK3bd66t6y6ulxVIZTKkoSp/AVIz4sNNOvaaVqbeEUiqTieFANAqYcttQWJtkGra1dKigMWcxmgrXFNyUQy03JQU/HsDcuoqJl0bMwJgmAQsctJJ+FZDH8PvWSBdtukjMpZSAwOzK2xHlXpuGwpd1QbsQvxMT8K7tPaS/fkiUTuIOWmlVyy0tjjt5K4r0X6HSC+JUqDAsus8nDMoPmJn0oPH8Fw7ahAD4SKdwe6MLhsT7OQ+IZLSGZYKFc3GHiFYAeLComUq047vpedpL4vv7VSCmc2kPVEgEjwLlj6iqp7cMVYaQJnbn19T8Ku8Rw7JhMMuxkEzyLwf8AKjuJ9k7zzdtlc0CLWxK7yH5Mem2g1qtm3ZhnjjJLQvZ3tY9ki3fJe1sH1L2/And0HxFW3FOyaXR7bCsql+9lBm0881I9w+WkjUVgipDEMpVlMFWBBUjkw5f6+tp2f4tiLLquHBfO3/BPusTuQB7hjUsNNdZikvxU58dl88Lq/wCqZisG4b2TW3FzYJEsSdsv2gTzGkVqezvBreAU38S6LcaFLFoVFO1tPtMeZ1nlWm4lj7dlBdugAgQoEM+YjVEPP5Dma8o7T8UuYhw76BZyWx7qDn/Mx5t4QN6nUxUlz5pr1PloO0PAcFxF3fC3RbxQEmVZVuAc2RgJ/nXXrNeYcSwF2w5tX0KOOuzD7SNsy+IrSWrphXUkMuoYGGDDmCNj5eNX6ccs4lBY4igK/VxAGXKx2ZiPcb7w7p5gVOOX5Z8n09x7x7V/0V8HztexLD3B7K2T9p9XbzC5R/Ua0fGe0T4SyQiZ7hcokglEEZszRvGwWdfSrvgXCkwWGSwrZxmdy2xbOxYExpIXKNOlD8U4cLyOq+8yhl/nXVfw+dTXNNb7Yrg/EcbfuTexN7JOqq+QHw7kQPKtbiuH2ri99Fc8iwzN/iaTWR4fiQrgRHhsfX1raWNVrHK1vJIxHEuBord1dOmlaXFEKLGUAA21kLosglSYGkkAfCo8UgLMG00n1pLxm3Z8FdZ8m1/Grce1eTWk/wDtIjahsTez6zQjLXCa2YrY1FcWaKZKhcUADJTMtGFKjKUBPCFgu/2EYr/O3cX8T8Kr8fhWCd3nM/61ZEZMMTze4B/Siz+LGpGaVrDO9tsJ0wlx3DFTP61pez3Z9MTZYMxR0uKyMII1XUMp3ByinY7CgiI9RvWj7FYfIjgCO8p+TVOPdWytk3BI4dnuorju2yHI5ae7B8T8qvQdTT3A/fhtUSHU1rIxyy2ou0fZtMT3wcl0CA8SGA+o6/WHjuKAwOFtcNsG9fIe83d7upJO1q1Oscyx8zAArQcX4nbw9o3bhgDQAe87HZEHMmvJuLcXfEXDcueIRAe6in6o8TpJ3JPKIquWo34ZnnNW9D8RxZ8Q/tLpGbZUHuIv2Vn5ncz5Cg8agYED9/H8+Y8aHwt7WPhy8f36irW1be4yogLO2gUb+vIAdfAVm7prGfiKDAhi4tKrMz6IqgkkxMAeQnp1o7h/DzcxCWHUqWcI6t3WABl1I8gfDavReCdm0wkuYa6/vvGig65E6L1O5+FWF/hCXL9rEDuukyeTqVIyt4gmQfTnV/Fy5fUzdk9flLdUbRpsPTaKTDoF16U66I9K68YSesfgau4mF43wkDFh1914dh0JJzR5kT/VV/YcBPACg+NOPaAc4A8gABHxmkeSkTWGXt0Y94gsKBduOJgQflyqS/hclpRMw7ifBgD/ANtM4cAj+hnrrpUuIPdyTsxPprAq/GrmAKU3KaOtoIqJ0rViv8QFjSgXWjHWonSgCy0xkoxkpotSQOpA+OlBHx/uW7FvoMx821/P5UywTl1/fnTe1twe3gfVAG/7jlQ5vQn7HwFc2V3k6MZ9rrlzvCtdwKJ/mWf8P+tZHBrnIrTcDP8AakDZUKj1Op+P4VfCKZ1oLu1CI8HWi7mgoZlFasnn/wBIpY4i1M5BbJQcsxdhcPnGQeRrIsoP73/f6167xfg6Ym3keQRqjj3lbqOoPMc68341wC5hj3xKkwHWSh8590+B8d6plPl38HJjcZj8qZASVCxLMqrJCrLEAS3ISdTy1r2Hs3wVMMkSHuMBneIJ+6o5IOXzrydEkERvvPz38ufSrng3am7hoQk3rQ+oT30H3HO4+62nQioxsi3PhlljrF61ct5gRQdmVMHqIPqKg4Lxq1iUzWnzR7y+66no6HVTRd2ZA6Qa0efZZdUzF2zEjn8jUSrKieVWATwobGjKhPXT46frRDCYm7nuM3Vj+NGN7nTw/Sqizclj6/iaPxFyFA9TXNfbqk6VwxGW5pyqxdZJPXX5RWeW5muidq1aYUwPAAVrxxnyBFWlNknlRIt1Z4RUjWtWJz26hKUYwqFxQDMlPwaf2ieDA/DWnstLZbKWborGelRfRGV4w4e+7dDpzHL5/pUbyYH70pqvMueZaNYHgfHnRPCrEsZ8q55N103qLDAJlTNzOg8Opq14GYfzEfn+VBEfDYUdwwQQ33vy/wA63k1HPld1ob/KoC+tTl5FD3FqUFU60t60CpVgGVt1IlSOhBpgMUUGkUHn3HOxmYlsMY62WO38jH8D6GsdfwbISrAqw0KkQw8CD+9a9suWweWvWgsXgLN2BdtqxGgbUOPAONarcdunj+os6y7eP4PD3hcRsPnW9MIUMP5HqvXNI01r2fhwueyQX3RroAzsgKoTzgfvyFR4HhVmwT7K0qltC+rOfAs0mPCiJgwRE1MmlOblmd6jrXEUDZJPqI+FQ8UxXeURpqZ5HYafGnYywHBkCRqDzqnxOKC23Dn3AzIT5ap66EeVGMZPApJJ5EnUcqIx9yFjnH5f6VBw8wmu8EeM6mfnQvFsRMj1Hzn9K5/l1B+CpnxCDkO8f6eXxr0NXXLWS7I4IhHukaucoPgN49a0a10YzUYZ3dRPvXCRUmWuC1ZRZutRMKnYUwrQQFay/bTj5w1orbZM7tkhgzEABWYgDQaONSfQ1rmSvLvpMvy6oOVxyR0/srI+Zn4UFR/tu+iK+ZG1jVBM7gD06VvOyvFUxNougIZSFdSNj4HYg6xXl98k21ADfaJ2AMEDXnpW0+iqCl/w9mPncP5io8Ynyrb5aJsjKo85+dNKVK75QNNNqVC0svIrmbrQOHxEacjtUzsaCc1Ijx5UKlzrU2TpQEowNOuWAdqDe5lExTrPEV2JimwRZuD3TvUj2wRqa7OragjzprodufI0EbjpXnv0gdorVq4tgAu5yu4WBkWO6pJ0LHU+A33rfupUEtsJYx0An8K+euK41sTinuvu7E+QGirHgoA9KjWyXTVW+NWhoxZNAAHGkctVkbR86ixbC4RkIcMTBUg6nlpVJ2dtWL2IFq6veunLbYC4xJ0AUhGBC6TmAMaz1Ep4OUuXGwd1s1l8jEyULwSAlwDvDuk6jYb86j9ONP1b8vVMFhMiIg+qoHrz+dEex0ojBhiiF/eKJm2kMVGbbTealugRV2avKf50429am25UhmgKcUyKB7Q8S/h7ReCeQAE68pbZB4n4GqnBdoSLmS4GZGQXFYIwdATGS4izB0kHSR6VW5SXTbHhyyx8pOmlKV5h264ciXrlx2MOwIUfWbIJBXdgsAToJYDk1ejYHiiXHdBIyBCW/wDszZQQdVfuzlI5ivK+NXlvPcdM2VbgRC5JuOiEB7rGJgsT4ACBsamWKXDKXVjPYPCG66W0HedsonYSdz6a+nKvW+z3B7GGDC0GGcIGYknMyTDa7E5jtpXmOBzhvaWe8bbwsD32HeZR/ST1JrX8P469xigYCM5YgF2hfqIsSXM7QYg+lMstVrxcGWU9N1l1qXJKkHcEj4VWdmeI/wAQgeGEPl7wg6HqNDy22MirV377g/aJq29zbLPG42y+4ERNCOY28qPsNmWoTuKdhmgwalmVkqawSKe6c6daWiU4thhFB3uHxqBPOKKRsporOKCkTCo+7uj+Og8gKnW3ft7HOvzqwvFOYms32p42LVoBNJPeidEH6n8DUW6TJugO2/aZEsNZQE3bqMsckXYsxHPkB+leM99ZOU6840k9D5/hVriVfEu9zOA0gBSeW8KI0A0oG9hLq6lQ3PkdjP41MRT8B2nxFlMiXO5BXKQpIEZWysRmQldJBFafs92i/iL1uwqOnuqiq5dEVAWbLm7yiFQQSwCqQPerDXUd2PcJYknuqSdTOgXxNbv6K7CLeuh8wvZAEV1ykLPfy5hmzHT0qU7emq8UhenMtcFohHlpQKkCU/LQY/tPwq8qYq82IYoyCEgagfUbkAJMEQTOtVd28bJuqLhVmv2gzlUkqyJnY93KAA08vxq17W9oLb2btpHQ6FSTnHeG4Q5MrEdAaCxtzM10wVnE4Q5TBIGS3ocpIPLasMtb6etxefhPOf8APwEtXVVFVXUL7a8ueLbShZypEgxJUHQa6RVUQ6qrOigslyJQAwEQliCPeD5xPTTpWjwvDg7CbWZf4nFF5XTJDqpM8gT6aVVtwy89tHKOzC0wJCnOTkVVRsxlmHe0Guo0NRqrXLDfv9g+NvMoKMFCqqEqq217s54mATIVZg7+tIpZgr5iW9ooGiwP7E3BEg5RJIjYAjTSnnDOpJZToUWQCSJuEFc8EocrEHUc42o/BJkuqTBZMVlyJscuHmEnqdAT4Upjfmf4WXAuC3rluy6Yl0HtbhYALpluOkrA1Jg6NK946aRWrxzZXOs+NZjsp2it20VLrIih3gy7MC1xmAcBMqbn63KedabEpLk8jWmGtdOH6vzmdlnXw7DuNvWp2tcxQvsIiJn1qZcI55tHm0/GruQXh7oIg71MFnUUGmDM/W+dEJhjMgMP8VEpRrpzqN2qUWQNTA8TpUVwpzZPVlH50EltzGteSfSLxBld1Y95nOUDmkSD4bhfjXqouIRo6ejofzrxHt/gb38VcZhmR2JR1hkKn3QMpMEKAI3majW0y6UfD+G4m4pvWrLXFtkM0KHG53SZZe6QQBXoHEOGe2wStcwqJjrqsbVvDg2iQsHPct5ssBdW05gDU15lhsRctNmtu6ONAyMVbfYxuPDardO09xmLYi3axJYLrdU5wF2CMsZdydBqTNWQscJ2NvtbV3Y2rz3MluyymSBqzswMoAAx2OgHUVfcEt4zDYnCo+IS/Zv3CigOznugnOucSsEciRpFUOG7VKM5y3lZhkU5ze9laOXOEZ2zZ2InUxovStH2GtnF43+JC5cNhE9lYXkGYZQP5sssfNaD0ZVp2WpslKqUESpXMtTZaUpQVeF4LbRHt5Va0WZsjKDlLGWUTus7dNfCsXw/CpiL17D2u6iMrBXBMi2q2wA6sGRgV0InQ+FJXVllPTt4M8vHPLfxK13Zm2cjB2ZntN7Mhold41XunTmoGkTrV2wpa6rz05uW/fVJ2iTuyjst0wqlYlpIAHe7v+KQOlY7imHNi7atuJ9o4dgk5u+r2iWuM0lu+NoAApa6qZ+3X9Jb/L/S/s3F/g1p0S0FVbYZGZAoAYAiF02BaJ8J6zXhPEsZdW4yrduqASAouOAACdAA0AeFdXVrJHDlnlfYYcSv/wDyL/8A+tz/AMquuAdrGs5lv5r1ptWl2NxOWZHJnzE6+FdXVKrZdmVtvfJVmuWr1sPbLFyQVYhhDajcVslwNuMuRI5AqCK6uqqUJ4Lh5zCzbB65V/SirEDQosfyrXV1BKVSJUAf0gfhWT7UHunSurqDzS9glLHcb7QRPkaCbh6hzmOUQ7NuxCLENPMnaOVdXUWafhvY4OLD3SQjG2GRCAQHbI0NrLKxWTzDabV7Dw7h9uxbW1ZQIi7KPmSeZJ3J1NdXVM9IvsUopCtdXUQWK6K6uoP/2Q==" alt="" />
              
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias quos id 
                  excepturi a quod vitae unde ullam ab office.</p>
          </div>
          <div className="sidebar-item">
              <span className="sidebar-title">CATEGORIES</span>
              <ul className="sidebar-list">
                  <li className="sidebar-list-item">Life</li>
                  <li className="sidebar-list-item">Music</li>
                  <li className="sidebar-list-item">Sport</li>
                  <li className="sidebar-list-item">Style</li>
                  <li className="sidebar-list-item">Cinema</li>
                  <li className="sidebar-list-item">Tech</li>
                 
              </ul>
          </div>
          <div className="sidebar-item">
              <span className="sidebar-title">FOLLOW US</span>
              <div className="sidebar-social">
         <i class="sidebar-icon fab fa-facebook-square"></i>
           <i class="sidebar-icon fab fa-instagram"></i>
           <i class="sidebar-icon fab fa-twitter"></i>
           <i class="sidebar-icon fab fa-telegram"></i></div> 
          </div>
        </div>
    ) 
}

export default Sidebar