$(function(){
    let data = {
        // 3レターコードで打ち込む、船の種類追加できそうなら追加
        'SHA⇒TYO' : {
            'ASW JAPAN' : {
                    '20FT運賃(JJ)' : '380(USD)',
                    '40FT運賃(JJ)' :'760(USD)',
                    '20FT運賃(それ以外)' : '250(USD)',
                    '40FT運賃(それ以外)' :'500(USD)',
                    'DOC FEE' : '6000(JPY)',
                    'D/O FEE' : '5000(JPY)',
                    '更新日' : '2020/5/8'
                },
                'TX logi' : {
                    '20FT運賃' : '240(USD)',
                    '40FT運賃' :'480(USD)',
                    'DOC FEE' : '3000(JPY)',
                    'D/O FEE' : '4000(JPY)',
                    '更新日' : '2020/5/8',
                }
            },
            'SHA⇒OSA' : {
                'ASW JAPAN' : {
                    '20FT運賃(JJ)' : '380(USD)',
                    '40FT運賃(JJ)' :'760(USD)',
                    '20FT運賃(それ以外)' : '250(USD)',
                    '40FT運賃(それ以外)' :'500(USD)',
                    'DOC FEE' : '6000(JPY)',
                    'D/O FEE' : '5000(JPY)',
                    '更新日' : '2020/5/8'
                },
                '日新トランス' : {
                    '20FT運賃' : '300(USD)',
                    '40FT運賃' : '760(USD)',
                    'DOC FEE' : '5000(JPY)',
                    'D/O FEE' : '5000(JPY)',
                    '更新日' : '2020/5/8'
                }
            },
            'CGP⇒TYO' : {
                'TX logi' : {
                    '20FT運賃' : 4000,
                    '40FT運賃' :8000,
                    'DOC FEE' : 6000,
                    'D/O FEE' : 7000,
                    '更新日' : '2020/5/8'
                }
            },
            'CCU⇒TYO' : {
                '日清トランス' : {
                    '20FT運賃' : '300(USD)',
                    '40FT運賃' : '760(USD)',
                    'DOC FEE' : '5000(JPY)',
                    'D/O FEE' : '5000(JPY)',
                    '更新日' : '2020/5/8'
                }
            }
        };
        
        init();

    function init() {
        initRoutes();
        $('#routes').on('change', function(item) {
            let rou = $('#routes').val();
            initForwarders(rou);
        });
        $('#forwarders').on('change', function(item) {
            let rou = $('#routes').val();
            let fwd = $('#forwarders').val();
            showResult(rou,fwd);
        });
    }

    function initRoutes() {
        let dom = $('#routes');

        dom.empty();
        dom.append('<option value="">(航路を選択)</option>');
        $.each(data, function (key, item) {
            dom.append('<option value="' + key + '">' + key + '</option>');
        });
    }
    function initForwarders(rou) {
        let dom = $('#forwarders');
        let forwarders = data[rou];

        dom.empty();
        dom.append('<option value="">(フォワーダーを選択)</option>');
        $.each(forwarders, function (key, item) {
            dom.append('<option value="' + key + '">' + key + '</option>');
        });
    }
    function showResult(rou, fwd) {
        let dom = $('#result');
        let result = data[rou][fwd];
        let thead = '<thead><tr>';
        let tbody = '<tbody><tr>';

        $.each(result, function (key, item) {
            thead += '<th>' + key + '</th>';
            tbody += '<td>' + item + '</td>';
        });
        thead += '</tr></thead>';
        tbody += '</tr></tbody>';

        dom.empty();
        dom.append(thead);
        dom.append(tbody);
    }


    $('#addition_1').change(function(){
        calc();
    });

    $('#addition_2').change(function(){
        calc();
    });

    function calc()
    {
        let val1 = $('#addition_1').val();
        let val2 = $('#addition_2').val();

        if ($.isNumeric(val1) && $.isNumeric(val2)) {
            $('#addition_result').text(parseInt(val1) + parseInt(val2));
        }
    }
});

